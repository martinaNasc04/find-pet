import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";

export async function getAllUsers() {
    return await db.$count(usersTable);
}
