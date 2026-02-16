import z from "zod";

export const UserSchema = z.object({
    clerkId: z.string(),
    fullName: z
        .string()
        .min(10, "Nome muito curto")
        .nonempty("Nome não pode ser vazio"),
    email: z.email("Email inválido"),
    age: z.coerce
        .number()
        .min(15, "Idade minima 15 anos")
        .nonnegative("Idade não deve ser negativa"),
    imageUrl: z.url(),
});

export const PetSchema = z.object({
    name: z.string().trim(),
    breed: z.string().trim(),
    color: z.string().trim().nonempty("Cor não pode ser vazia"),
    imageUrl: z
        .url("URL inválida")
        .trim()
        .nonempty("Imagem não pode ser vazia"),
    typePet: z.string().trim().nonempty("Tipo de pet nao pode ser vazio"),
    age: z.coerce.number().nonnegative("Idade nao pode ser negativa"),
    location: z.string().trim().nonempty("Localização não pode ser vazia"),
    status: z.enum(["perdido", "encontrado", "adocao"]),
    description: z
        .string()
        .trim()
        .max(100, "Descrição devem ser no máximo 100 caracteres"),
    userId: z.number(),
});
