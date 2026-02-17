"use server";
import { db } from "@/db";
import { petsTable } from "@/db/schema/petSchema";
import { PetFilters } from "../../../type";
import { and, desc, eq, ilike, or } from "drizzle-orm";
import { PetSchema } from "../validation";
import z from "zod";
import { getUserId } from "./user";

export const getPetsWithFilters = async (filters: PetFilters) => {
    if (!filters.status) {
        filters.status = "perdido";
    }
    const conditions = [];
    // Status do pet
    conditions.push(eq(petsTable.status, filters.status));

    // Buscar por outros filtros
    if (filters.breed) {
        conditions.push(ilike(petsTable.breed, `%${filters.breed}%`));
    }
    if (filters.color) {
        conditions.push(ilike(petsTable.color, `%${filters.color}%`));
    }
    if (filters.typePet) {
        conditions.push(ilike(petsTable.typePet, `%${filters.typePet}%`));
    }
    if (filters.location) {
        conditions.push(ilike(petsTable.location, `%${filters.location}%`));
    }
    if (filters.search) {
        conditions.push(
            or(
                ilike(petsTable.color, `%${filters.search}%`),
                ilike(petsTable.breed, `%${filters.search}%`),
            ),
        );
    }

    // Buscar pets
    const results = await db
        .select()
        .from(petsTable)
        .where(and(...conditions));

    return {
        pets: results,
    };
};

export const getRecentPets = async () => {
    const pets = await db
        .select()
        .from(petsTable)
        .orderBy(desc(petsTable.createdAt))
        .limit(5);
    return pets;
};

export const getPetById = async (id: string) => {
    const pet = await db
        .select()
        .from(petsTable)
        .where(eq(petsTable.id, Number(id)));
    if (!pet) {
        throw new Error("Pet not found");
    }
    return pet;
};

export const getUserPets = async () => {
    try {
        const userId = await getUserId();
        const pets = await db
            .select()
            .from(petsTable)
            .where(eq(petsTable.userId, userId));
        return pets;
    } catch (error) {
        console.error("Erro ao buscar pets:", error);
        return [];
    }
};

export const insertPet = async (prevData: any, formData: FormData) => {
    let userId;
    try {
        userId = await getUserId();
    } catch {
        return {
            success: false,
            message: "User not found",
        };
    }

    const name = formData.get("name") || "Não informado";
    const breed = formData.get("breed") || "Raça não informada";
    const color = formData.get("color") as string;
    const typePet = formData.get("typePet") as string;
    const imageUrl = formData.get("imageUrl") as string;
    const age = formData.get("age") || 0;
    const location = formData.get("location") as string;
    const status = formData.get("status") as string;
    const description = formData.get("description") || "Sem descrição";

    // Validação
    const petData = PetSchema.safeParse({
        name,
        breed,
        color,
        typePet,
        imageUrl,
        age,
        location,
        status,
        description,
        userId,
    });

    if (!petData.success) {
        const prettyMessage = z
            .prettifyError(petData!.error)
            .split("→")[0]
            .trim();
        return {
            success: false,
            message: prettyMessage,
        };
    }

    try {
        await db.insert(petsTable).values(petData.data);
        return {
            success: true,
            message: "Pet cadastrado com sucesso",
        };
    } catch (error) {
        return {
            success: false,
            message: `Erro ao inserir pet: ${error}`,
        };
    }
};

// export const deletePet = async (id: number) => {};
