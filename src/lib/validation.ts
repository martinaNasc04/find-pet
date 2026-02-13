import z from "zod";

export const UserSchema = z.object({
    clerkId: z.string(),
    fullName: z.string().min(10, "Nome muito curto"),
    email: z.email("Email inválido"),
    age: z.coerce
        .number()
        .min(15, "Idade minima 15 anos")
        .nonnegative("Idade não deve ser negativa"),
    imageUrl: z.string(),
});
