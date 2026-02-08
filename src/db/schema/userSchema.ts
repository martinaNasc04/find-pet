import {
    integer,
    pgTable,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

// User table
export const usersTable = pgTable("users_table", {
    userId: serial("userId").primaryKey(),
    clerkId: varchar("clerkId", { length: 255 }).notNull().unique(),
    fullName: varchar("fullName", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    age: integer("age").notNull(),
    imageUrl: varchar("imageUrl", { length: 255 }),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
});
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
