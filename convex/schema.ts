import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  TodayLunch: defineTable({
    food: v.string(),
    kitchen: v.string(),
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
});