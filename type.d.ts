import { SelectPet } from "@/db/schema/petSchema";
import { SelectUser } from "@/db/schema/userSchema";
import { PgEnum } from "drizzle-orm/pg-core";

export type PetsDatabase = Omit<SelectPet, "userId">;
export type UserDatabase = Omit<SelectUser, "clerkId" | "createdAt">;
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

export interface FilterOptions {
    breeds: string[];
    colors: string[];
    typePets: string[];
    locations: string[];
}
