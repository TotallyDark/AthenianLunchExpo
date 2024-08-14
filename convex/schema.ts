import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  TodayLunchPhoto: defineTable({
    icon_url: v.string(),
  }),
  TodayLunch: defineTable({
    menu: v.string(),
    food: v.string(),
    kitchen: v.optional(v.string()),
  }),
  food: defineTable({ text: v.string() }),
  groups: defineTable({
    description: v.string(),
    name: v.string(),
  }),
  pythonGroupTest: defineTable({
    description: v.string(),
    name: v.string(),
  }),
  Date: defineTable({
    day: v.string(),
    month: v.string(),
    year: v.string(),
  }),
});

