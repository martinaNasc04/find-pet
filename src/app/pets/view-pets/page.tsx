import PetCard from "@/components/PetCard";
import { getUserPets } from "@/lib/actions/pet";

export default async function ViewPetsPage() {
    let pets: Awaited<ReturnType<typeof getUserPets>> = [];

    try {
        pets = await getUserPets();
    } catch (error) {
        console.error("Erro ao buscar pets:", error);
        return (
            <div className="min-h-screen p-8 mt-10 bg-gray-50">
                <div className="max-w-6xl mx-auto mb-2">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="mb-8 text-4xl font-bold text-center text-black">
                            Seus pets cadastrados
                        </h1>
                        <p className="text-2xl text-center">
                            Erro ao buscar pets
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2">
                <div className="flex flex-col items-center justify-center space-y-5">
                    <h1 className="mb-8 text-4xl font-bold text-center text-black">
                        Seus pets cadastrados
                    </h1>
                    {/* Verificar se o usuário tem pets */}
                    {pets.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-black">
                            {pets.map((pet) => (
                                <PetCard
                                    pet={pet}
                                    session={true}
                                    key={pet.id}
                                />
                            ))}
                        </div>
                    )}
                    {pets.length === 0 && (
                        <p className="text-2xl text-center col-span-full">
                            Você não tem nenhum pet cadastrado
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
