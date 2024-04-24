import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addItem = mutation({
    args: {kitchen: v.string(), food: v.string()},
    handler: async ({db}, args) => {
      return await db.insert("TodayLunch", args);
      }
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("TodayLunch").collect()
  }
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
})

