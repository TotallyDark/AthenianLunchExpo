import { api } from "./_generated/api";
import { action, mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const addItem = mutation({
    args: {kitchen: v.string(), food: v.string(), menu: v.string()},
    handler: async ({db}, args) => {
      return await db.insert("TodayLunch", args);
      }
});

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("TodayLunch").collect()
  }
});

export const getLunch = query({
  handler: async (ctx) => {
    return await ctx.db
    .query("TodayLunch")
    .filter((q) => q.eq(q.field("menu"), "Lunch"))
    .collect()
  }
});

export const getBreakfast = query({
  handler: async (ctx) => {
    return await ctx.db
    .query("TodayLunch")
    .filter((q) => q.eq(q.field("menu"), "Breakfast"))
    .collect()
  }
});

export const getDinner = query({
  handler: async (ctx) => {
    return await ctx.db
    .query("TodayLunch")
    .filter((q) => q.eq(q.field("menu"), "Dinner"))
    .collect()
  }
});


export const list = query({//collecting images from db (https://docs.convex.dev/file-storage/serve-files)
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query("TodayLunchPhoto").first();
    if(messages == null){
      return;
    }
    return await ctx.storage.getUrl(messages.icon_url)
  },
});


export const remove = mutation({
  args: {id: v.id("TodayLunch")},
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  }
});

export const update = mutation({
  args: {id: v.id("TodayLunch"), food: v.string()},
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { food: args.food });
  }
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const swapImage = action({ //combines upload and delete into one function
  args: {storageId: v.id("_storage")},
  handler: async (ctx, args) => {
    const img = await ctx.runQuery(api.groups.getImage)
    if(img === null) {
      return
    }
    try {await ctx.storage.delete(img.icon_url)}
    catch (e) {
      console.log("No files found in Convex DB")
    }
    await ctx.runMutation(api.groups.sendImage, {
      imgId: img._id, storageId: args.storageId,
    });
    },
})

export const getImage = query({
  handler: async (ctx) => {
    return await ctx.db.query("TodayLunchPhoto").first(); //gets everything in the DB
  },
})

export const sendImage = mutation({
  args: { imgId: v.id("TodayLunchPhoto"), storageId: v.id("_storage") }, //adds tag ref to a table
  handler: async (ctx, args) => {
    await ctx.db.patch(args.imgId, { icon_url: args.storageId });
  },
})

