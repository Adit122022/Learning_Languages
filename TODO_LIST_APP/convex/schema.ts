import { defineSchema , defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    //  Only One table
    todos: defineTable({
        text:v.string(),
        isCompleted:v.boolean(),

    })
})