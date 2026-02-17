import PetForm from "@/components/PetForm";
import { getPetById } from "@/lib/actions/pet";
import React from "react";

export default async function EditPetPage({
    params,
}: {
    params: Promise<{ id: string[] }>;
}) {
    const resolvedParams = await params;
    const petId = resolvedParams.id[0];
    const petData = await getPetById(petId);
    return <PetForm typeForm="edit" pet={petData} />;
}
