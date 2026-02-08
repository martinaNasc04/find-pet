import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";
import { count } from "drizzle-orm";

export async function getAllUsers() {
    const result = await db.select({ count: count() }).from(usersTable);
    return result[0].count;
}
