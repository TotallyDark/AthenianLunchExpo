import { v } from "convex/values";
import { action, internalMutation, mutation} from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { internal } from "./_generated/api";
// import image from "../page-0.png";


//Push image to backend


export const generateAndStore = action({
    args: {
        imageUrl: v.string()
    },

    handler: async (ctx, args) => {
    const response = await fetch(args.imageUrl); // Fetch the image directly
    const image = await response.blob();
    const storageId = await ctx.storage.store(image); // Store the image directly without creating a Request object
    await ctx.runMutation(internal.upload.saveStorageId, {
      storageId: storageId,
    });
    },
  });
   
  export const saveStorageId = internalMutation({
    args: {
        storageId: v.id("_storage")
    },
    handler: async (ctx, args) => {
        const retrievedImg = await ctx.db.query("TodayLunchPhoto").first();
        if(retrievedImg==null) {
            return;
        }
        await ctx.db.patch(retrievedImg._id, {icon_url: args.storageId});
      },
  });