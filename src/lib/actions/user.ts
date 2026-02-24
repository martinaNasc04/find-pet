"use server";
import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";
import { auth } from "@clerk/nextjs/server";
import { and, count, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { UserSchema } from "../validation";
import z from "zod";

export async function getAllUsers() {
    const result = await db.select({ count: count() }).from(usersTable);
    return result[0].count;
}

export const getUserById = async () => {
    const id = await getUserId();
    const user = await db
        .select({
            userId: usersTable.userId,
            fullName: usersTable.fullName,
            age: usersTable.age,
            email: usersTable.email,
            imageUrl: usersTable.imageUrl,
        })
        .from(usersTable)
        .where(eq(usersTable.userId, Number(id)));
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

export async function getUserId() {
    const { userId: clerkId } = await auth();

    if (!clerkId) redirect("/login");

    // Buscando o userId do usuário com base no clerkId
    const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.clerkId, clerkId as string));

    if (user.length === 0) {
        throw new Error("User not found");
    }
    const id = user[0].userId;

    return id;
}

export async function getCurrentUserInfo() {
    const userId = await getUserId();

    const user = await db
        .select({
            userId: usersTable.userId,
            fullName: usersTable.fullName,
            email: usersTable.email,
            imageUrl: usersTable.imageUrl,
            createdAt: usersTable.createdAt,
        })
        .from(usersTable)
        .where(eq(usersTable.userId, userId));

    return user;
}

export async function checkUserExist() {
    const { userId: clerkId } = await auth();
    if (!clerkId) redirect("login");
    return db
        .select({ userId: usersTable.userId })
        .from(usersTable)
        .where(eq(usersTable.clerkId, clerkId));
}

export async function insertUser(prevData: any, formData: FormData) {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
        return {
            success: false,
            message: "User não encontrado",
        };
    }

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

export const updateUser = async (prevData: any, formData: FormData) => {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
        return {
            success: false,
            message: "User não encontrado",
        };
    }
    const userId = await getUserId();
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const age = formData.get("age");
    const imageUrl = formData.get("imageUrl") as string;

    const userData = UserSchema.safeParse({
        fullName,
        email,
        age,
        imageUrl,
        userId,
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
    try {
        await db
            .update(usersTable)
            .set(userData.data)
            .where(eq(usersTable.userId, userId));
        return {
            success: true,
            message: "Perfil atualizado com sucesso!",
        };
    } catch (error) {
        return {
            success: false,
            message: `Erro ao atualizar perfil: ${error}`,
        };
    }
};
