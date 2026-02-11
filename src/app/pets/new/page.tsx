"use client";
import InsertPetForm from "@/components/InsertPetForm";
import { useUser } from "@clerk/nextjs";

export default function NewPetPage() {
    // Verificar se usuário está logado para acessar essa rota
    const { isLoaded } = useUser();

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
    return <InsertPetForm />;
}
