import PetCard from "@/components/PetCard";
import { getUserPets } from "@/lib/actions/pet";

export default async function ViewPetsPage() {
    const pets = await getUserPets();

    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2">
                <div className="flex flex-col items-center justify-center space-x-5">
                    <h1 className="mb-8 text-4xl font-bold text-center text-black">
                        Seus pets cadastrados
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
                        {/* Verificar se o usuário tem pets */}
                        {pets.length === 0 && (
                            <p className="text-2xl text-center">
                                Você não possui pets cadastrados
                            </p>
                        )}
                        {pets.map((pet) => (
                            <PetCard pet={pet} session={true} key={pet.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
