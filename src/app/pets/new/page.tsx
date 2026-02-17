"use client";
import PetForm from "@/components/PetForm";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function NewPetPage() {
    // Verificar se usuário está logado para acessar essa rota
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) {
        return (
            <div className="min-h-screen p-8 mt-10 bg-gray-50">
                <div className="max-w-6xl mx-auto mb-2">
                    <h1 className="mb-8 text-4xl font-bold text-center text-black">
                        Carregando...
                    </h1>
                </div>
            </div>
        );
    }

    if (!isSignedIn) {
        redirect("/sign-in");
    }

    return <PetForm typeForm="insert" />;
}
