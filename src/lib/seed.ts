// lib/seed.ts
import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";
import { petsTable } from "@/db/schema/petSchema";

async function seed() {
    console.log("🌱 Seeding database...");

    try {
        // Clear existing data (optional - be careful!)
        console.log("🗑️ Clearing existing data...");
        await db.delete(petsTable);
        await db.delete(usersTable);

        // Create users
        console.log("👥 Creating users...");
        const users = await db
            .insert(usersTable)
            .values([
                {
                    clerkId: "user_seed_001",
                    fullName: "Sarah Martinez",
                    email: "sarah.martinez@email.com",
                    age: 28,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                },
                {
                    clerkId: "user_seed_002",
                    fullName: "John Smith",
                    email: "john.smith@email.com",
                    age: 35,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                },
                {
                    clerkId: "user_seed_003",
                    fullName: "Emma Johnson",
                    email: "emma.johnson@email.com",
                    age: 32,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
                },
                {
                    clerkId: "user_seed_004",
                    fullName: "Mike Chen",
                    email: "mike.chen@email.com",
                    age: 29,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
                },
                {
                    clerkId: "user_seed_005",
                    fullName: "Lisa Davis",
                    email: "lisa.davis@email.com",
                    age: 26,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
                },
                {
                    clerkId: "user_seed_006",
                    fullName: "David Wilson",
                    email: "david.wilson@email.com",
                    age: 41,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
                },
                {
                    clerkId: "user_seed_007",
                    fullName: "Anna Brown",
                    email: "anna.brown@email.com",
                    age: 24,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
                },
                {
                    clerkId: "user_seed_008",
                    fullName: "Carlos Rodriguez",
                    email: "carlos.rodriguez@email.com",
                    age: 38,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
                },
                {
                    clerkId: "user_seed_009",
                    fullName: "Maria Garcia",
                    email: "maria.garcia@email.com",
                    age: 31,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
                },
                {
                    clerkId: "user_seed_010",
                    fullName: "James Taylor",
                    email: "james.taylor@email.com",
                    age: 45,
                    imageUrl:
                        "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
                },
            ])
            .returning();

        console.log(`✅ Created ${users.length} users`);

        // Create pets
        console.log("🐾 Creating pets...");
        const pets = await db
            .insert(petsTable)
            .values([
                // Sarah (user 1) - Lost her dog
                {
                    userId: users[0].userId,
                    name: "Luna",
                    breed: "Golden Retriever",
                    typePet: "cachorro",
                    color: "Dourado",
                    age: 3,
                    location: "Seattle, WA",
                    status: "perdido",
                    description:
                        "Cachorra muito amigável, vista pela última vez usando uma coleira azul. Muito brincalhona e responde pelo nome.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80",
                },

                // John (user 2) - Found a cat
                {
                    userId: users[1].userId,
                    name: "Desconhecido",
                    breed: "Gato Malhado",
                    typePet: "gato",
                    color: "Laranja",
                    age: null,
                    location: "Portland, OR",
                    status: "encontrado",
                    description:
                        "Encontrado perto da biblioteca. Muito amigável e bem alimentado. Sem coleira mas pode ter microchip.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
                },

                // Emma (user 3) - Has puppies for adoption (multiple!)
                {
                    userId: users[2].userId,
                    name: "Max",
                    breed: "Labrador Mix",
                    typePet: "cachorro",
                    color: "Marrom",
                    age: 0, // 3 months
                    location: "Denver, CO",
                    status: "adocao",
                    description:
                        "Filhote doce de uma ninhada de 5. Muito brincalhão e adora crianças. Primeiras vacinas feitas.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
                },
                {
                    userId: users[2].userId,
                    name: "Bella",
                    breed: "Labrador Mix",
                    typePet: "cachorro",
                    color: "Preto",
                    age: 0, // 3 months
                    location: "Denver, CO",
                    status: "adocao",
                    description:
                        "Filhote adorável da mesma ninhada que Max. Muito energética e amigável.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
                },
                {
                    userId: users[2].userId,
                    name: "Charlie",
                    breed: "Labrador Mix",
                    typePet: "cachorro",
                    color: "Amarelo",
                    age: 0, // 3 months
                    location: "Denver, CO",
                    status: "adocao",
                    description:
                        "Filhote gentil, perfeito para famílias. Ótimo com outros cachorros.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
                },

                // Mike (user 4) - Lost his cat
                {
                    userId: users[3].userId,
                    name: "Shadow",
                    breed: "Gato Preto",
                    typePet: "gato",
                    color: "Preto",
                    age: 5,
                    location: "Austin, TX",
                    status: "perdido",
                    description:
                        "Gato de interior que escapou. Muito tímido. Usando uma coleira vermelha com sininho.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
                },

                // Lisa (user 5) - Has kittens for adoption
                {
                    userId: users[4].userId,
                    name: "Mittens",
                    breed: "Pelo Curto Doméstico",
                    typePet: "gato",
                    color: "Branco",
                    age: 0, // 2 months
                    location: "Boston, MA",
                    status: "adocao",
                    description:
                        "Gatinho brincalhão, treinado para caixinha. Adora se aconchegar.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80",
                },
                {
                    userId: users[4].userId,
                    name: "Whiskers",
                    breed: "Pelo Curto Doméstico",
                    typePet: "gato",
                    color: "Cinza",
                    age: 0, // 2 months
                    location: "Boston, MA",
                    status: "adocao",
                    description:
                        "Gatinho doce da mesma ninhada. Muito afetuoso.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80",
                },

                // David (user 6) - Found a dog
                {
                    userId: users[5].userId,
                    name: "Buddy",
                    breed: "Beagle",
                    typePet: "cachorro",
                    color: "Marrom e Branco",
                    age: 4,
                    location: "Chicago, IL",
                    status: "encontrado",
                    description:
                        "Encontrado vagando no parque. Muito amigável. Tem uma coleira desgastada mas sem etiquetas legíveis.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1612536048329-0b3c34c93a5c?w=800&q=80",
                },

                // Anna (user 7) - Lost her cat
                {
                    userId: users[6].userId,
                    name: "Fluffy",
                    breed: "Persa",
                    typePet: "gato",
                    color: "Branco",
                    age: 6,
                    location: "Miami, FL",
                    status: "perdido",
                    description:
                        "Gato persa de pelo longo. Muito fofinho. Precisa de medicação diária.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80",
                },

                // Carlos (user 8) - Has an older dog for adoption
                {
                    userId: users[7].userId,
                    name: "Rocky",
                    breed: "Pastor Alemão",
                    typePet: "cachorro",
                    color: "Preto e Marrom",
                    age: 7,
                    location: "Phoenix, AZ",
                    status: "adocao",
                    description:
                        "Cachorro idoso procurando um lar tranquilo. Bem treinado e gentil. Ótimo com crianças.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80",
                },

                // Maria (user 9) - Found a kitten
                {
                    userId: users[8].userId,
                    name: "Tiny",
                    breed: "Filhote",
                    typePet: "gato",
                    color: "Laranja",
                    age: 0, // 6 weeks
                    location: "San Diego, CA",
                    status: "encontrado",
                    description:
                        "Filhote abandonado encontrado. Muito pequeno e precisa de cuidados. Sendo alimentado com mamadeira.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
                },

                // James (user 10) - Lost his dog
                {
                    userId: users[9].userId,
                    name: "Duke",
                    breed: "Husky Siberiano",
                    typePet: "cachorro",
                    color: "Cinza e Branco",
                    age: 2,
                    location: "Nashville, TN",
                    status: "perdido",
                    description:
                        "Husky Siberiano com olhos azuis. Muito energético. Visto pela última vez perto do parque canino.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1568572933382-74d440642117?w=800&q=80",
                },

                // Emma (user 3) - One more puppy for adoption
                {
                    userId: users[2].userId,
                    name: "Daisy",
                    breed: "Labrador Mix",
                    typePet: "cachorro",
                    color: "Branco",
                    age: 0, // 3 months
                    location: "Denver, CO",
                    status: "adocao",
                    description:
                        "Última filhote disponível da ninhada. Muito calma e afetuosa.",
                    imageUrl:
                        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
                },
            ])
            .returning();

        console.log(`✅ Created ${pets.length} pets`);
        console.log("🎉 Seeding completed successfully!");
        console.log("\n📊 Summary:");
        console.log(`   - Users: ${users.length}`);
        console.log(`   - Pets: ${pets.length}`);
        console.log(
            `   - Perdidos: ${pets.filter((p) => p.status === "perdido").length}`,
        );
        console.log(
            `   - Encontrados: ${pets.filter((p) => p.status === "encontrado").length}`,
        );
        console.log(
            `   - Adoção: ${pets.filter((p) => p.status === "adocao").length}`,
        );
        console.log("\n👥 Pets per user:");
        users.forEach((user) => {
            const userPets = pets.filter((p) => p.userId === user.userId);
            console.log(`   - ${user.fullName}: ${userPets.length} pet(s)`);
        });
    } catch (error) {
        console.error("❌ Seeding failed:", error);
        throw error;
    }
}

// Run the seed function
seed()
    .then(() => {
        console.log("\n✅ Seeding complete! You can now close this process.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("💥 Fatal error:", error);
        process.exit(1);
    });
