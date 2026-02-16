"use server";
import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";
import { auth } from "@clerk/nextjs/server";
import { count, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { UserSchema } from "../validation";
import z from "zod";

export async function getAllUsers() {
    const result = await db.select({ count: count() }).from(usersTable);
    return result[0].count;
}

export async function checkUser(clerkId: string) {
    if (!clerkId) redirect("login");
    return db
        .select({ userId: usersTable.userId })
        .from(usersTable)
        .where(eq(usersTable.clerkId, clerkId));
}

export async function insertUser(prevData: any, formData: FormData) {
    const { userId: clerkId } = await auth();

    if (!clerkId) throw new Error("Unauthorized");

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const age = formData.get("age");
    const imageUrl = formData.get("imageUrl") as string;

    // Verificando os campos necessários
    if (!fullName || !email || !age || !imageUrl) {
        return {
            success: false,
            message: "Todos os campos precisam ser preenchidos",
        };
    }

    // Validação
    const userData = UserSchema.safeParse({
        fullName,
        email,
        age,
        imageUrl,
        clerkId,
    });
    if (!userData.success) {
        const prettyMessage = z
            .prettifyError(userData!.error)
            .split("→")[0]
            .trim();
        return {
            success: false,
            message: prettyMessage,
        };
    }

    // Inserindo perfil no banco de dados
    try {
        await db.insert(usersTable).values(userData.data);

        return {
            success: true,
            message: "Perfil criado com sucesso!",
        };
    } catch (error) {
        return {
            success: false,
            message: `Erro ao inserir perfil: ${error}`,
        };
    }
}
