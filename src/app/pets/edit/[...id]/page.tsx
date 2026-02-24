import PetForm from "@/components/PetForm";
import { getPetById, verifyPostOwnership } from "@/lib/actions/pet";
import Link from "next/link";
import React from "react";

export default async function EditPetPage({
    params,
}: {
    params: Promise<{ id: string[] }>;
}) {
    const resolvedParams = await params;
    const petId = resolvedParams.id[0];
    // Verificar se o usuário é dono desse post do pet
    const checkPostOwnership = await verifyPostOwnership(petId);
    if (!checkPostOwnership.success) {
        return (
            <div className="min-h-screen p-8 mt-10 bg-gray-50">
                <div className="flex flex-col items-center justify-center max-w-6xl mx-auto mb-2 space-y-4">
                    <h1 className="text-2xl font-bold md:text-3xl">
                        {checkPostOwnership.message}
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                        <Link
                            href="/pets"
                            className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                        >
                            Voltar para pets
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        const petData = await getPetById(petId);
        return <PetForm typeForm="edit" pet={petData} />;
    }
}
