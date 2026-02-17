import { SelectPet } from "@/db/schema/petSchema";
import { PgEnum } from "drizzle-orm/pg-core";

export type PetsDatabase = Omit<SelectPet, "userId">;
export type Pets = {
    id: number;
    name: string;
    breed: string;
    color: string;
    typePet: string;
    imageUrl: string;
    age: number;
    location: string;
    status: string;
    description: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
};

export type PetFilters = {
    status: PgEnum<"status", "perdido" | "encontrado" | "adocao">;
    breed?: string;
    color?: string;
    typePet?: string;
    location?: string;
    search?: string;
};
