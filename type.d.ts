import { PgEnum } from "drizzle-orm/pg-core";

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

enum Status {
    Perdido = "perdido",
    Encontrado = "encontrado",
    Adocao = "adocao",
}

export type PetFilters = {
    status: PgEnum<"status", "perdido" | "encontrado" | "adocao">;
    breed?: string;
    color?: string;
    typePet?: string;
    location?: string;
    search?: string;
};
