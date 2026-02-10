import {
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { usersTable } from "./userSchema";
// Pets Table
export const statusEnum = pgEnum("status", ["perdido", "encontrado", "adocao"]);
export const petsTable = pgTable("pets_table", {
    id: serial("id").primaryKey(),
    name: varchar({ length: 255 }),
    breed: varchar({ length: 255 }),
    color: varchar({ length: 255 }).notNull(),
    typePet: varchar({ length: 255 }).notNull(),
    imageUrl: varchar("imageUrl", { length: 255 }),
    age: integer(),
    location: varchar({ length: 255 }).notNull(),
    status: statusEnum().notNull(),
    description: text(),
    userId: integer("userId")
        .notNull()
        .references(() => usersTable.userId, { onDelete: "cascade" }),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export type InsertPet = typeof petsTable.$inferInsert;
export type SelectPet = typeof petsTable.$inferSelect;
