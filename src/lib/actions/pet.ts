import { db } from "@/db";
import { petsTable } from "@/db/schema/petSchema";
import { PetFilters } from "../../../type";
import { and, eq, ilike, or } from "drizzle-orm";

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
