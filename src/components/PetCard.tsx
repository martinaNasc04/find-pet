"use client";
import { PetsDatabase } from "../../type";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useActionState, useEffect } from "react";
import { deletePet } from "@/lib/actions/pet";
import { useRouter } from "next/navigation";

interface PetCardProps {
    pet: PetsDatabase;
    session: boolean;
}
const initialState = {
    success: false,
    message: "",
};
export default function PetCard({ pet, session }: PetCardProps) {
    const { id, name, age, location, imageUrl, status, createdAt } = pet;
    const [state, formAction, isPending] = useActionState(
        deletePet,
        initialState,
    );
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            router.push("/pets/view-pets");
        }
    }, [state.success, router]);

    // Define a configuração de cores e rótulos para cada status
    const statusConfig: Record<string, { bg: string; label: string }> = {
        perdido: { bg: "bg-red-100 text-red-800", label: "Perdido" },
        encontrado: { bg: "bg-green-100 text-green-800", label: "Encontrado" },
        adocao: { bg: "bg-blue-100 text-blue-800", label: "Adoção" },
    };
    const currentStatus = statusConfig[status];
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                {/* Image */}
                {imageUrl ? (
                    <div className="relative w-full aspect-square bg-gray-100 overflow-hidden rounded-lg">
                        <Image
                            src={imageUrl}
                            alt={`Photo of ${name}`}
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                ) : (
                    <div className="relative w-full h-48 md:h-64 bg-gray-300 flex items-center justify-center">
                        <p className="text-gray-500 text-lg md:text-2xl">
                            Sem imagem
                        </p>
                    </div>
                )}

                <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold truncate md:text-xl">
                            {name}
                        </h3>
                        <Link href={`/pets/${id}`}>
                            <Button
                                size="sm"
                                className="bg-[#3F51B5] font-semibold hover:bg-[#5969C5]/90 cursor-pointer"
                            >
                                Ver detalhes
                            </Button>
                        </Link>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 md:text-base">
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Idade:</span>{" "}
                            {age === null || age === 0 ? "Sem idade" : age}
                        </p>
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Local:</span>{" "}
                            {location}
                        </p>
                        <p className="text-sm md:text-xl">
                            <span
                                className={`inline-block px-2 py-1 rounded-full text-sm font-medium
                                ${currentStatus.bg}`}
                            >
                                Status:
                            </span>{" "}
                            {currentStatus.label}
                        </p>
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Postado em:</span>{" "}
                            {new Date(createdAt).toLocaleDateString("pt-BR")}
                        </p>
                    </div>
                    {session && (
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between">
                                <form action={formAction}>
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={pet.id}
                                    />
                                    <Button className="bg-red-500 text-white px-4 py-2 cursor-pointer">
                                        {isPending ? "Deletando..." : "Deletar"}
                                    </Button>
                                </form>
                                <Link href={`/pets/edit/${pet.id}`}>
                                    <Button className="bg-blue-500 text-white px-4 py-2 cursor-pointer">
                                        Editar
                                    </Button>
                                </Link>
                            </div>
                            {state.message && (
                                <div
                                    className={`${state.success ? "bg-green-300" : "bg-red-300"} p-2 mt-6 rounded-lg flex items-center justify-center`}
                                >
                                    <p
                                        className={
                                            state.success
                                                ? "text-green-700"
                                                : "text-red-700"
                                        }
                                    >
                                        {state.message}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
