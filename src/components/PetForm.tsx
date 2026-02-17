"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { updatePet, insertPet } from "@/lib/actions/pet";
import Link from "next/link";
import { PetsDatabase } from "../../type";

const initialState = {
    success: false,
    message: "",
};

interface PetFormProps {
    typeForm: string;
    pet?: PetsDatabase[];
}

export default function PetForm({ typeForm, pet }: PetFormProps) {
    const action = typeForm === "insert" ? insertPet : updatePet;
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(action, initialState);

    useEffect(() => {
        if (state.success) {
            const timeOut = setTimeout(() => {
                router.push("/pets/view-pets");
            }, 3000);
            return () => clearTimeout(timeOut);
        }
    }, [state.success, router]);

    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2 space-y-4">
                <h1 className="text-2xl font-bold">
                    {typeForm === "insert"
                        ? " Poste o seu pet"
                        : " Edite o seu pet"}
                </h1>
                <div className="flex flex-col items-center justify-center w-full">
                    <Card className="w-full max-w-xl">
                        <CardHeader className="border-b-2 border-indigo-100">
                            <CardTitle>
                                {typeForm === "insert" ? "Coloque" : "Atualize"}{" "}
                                as informações do pet
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form action={formAction}>
                                <div className="grid grid-cols-2 items-center gap-6">
                                    {typeForm === "edit" && (
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={pet[0].id as number}
                                        />
                                    )}

                                    <div className="grid gap-2 ">
                                        <Label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Nome:
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0].name as string)
                                                    : ""
                                            }
                                            placeholder="Insira o nome do pet"
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="breed"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Raça:
                                        </Label>
                                        <Input
                                            id="breed"
                                            name="breed"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0].breed as string)
                                                    : ""
                                            }
                                            placeholder="Husky, vira-lata, persa..."
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="color"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Cor:
                                        </Label>
                                        <Input
                                            id="color"
                                            name="color"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0].color as string)
                                                    : ""
                                            }
                                            placeholder="Insira a cor do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="typePet"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Tipo de pet:
                                        </Label>
                                        <Input
                                            id="typePet"
                                            name="typePet"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0].typePet as string)
                                                    : ""
                                            }
                                            placeholder="Gato ou cachorro..."
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="imageUrl"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Imagem:
                                        </Label>
                                        <Input
                                            id="imageUrl"
                                            name="imageUrl"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0]
                                                          .imageUrl as string)
                                                    : ""
                                            }
                                            placeholder="Insira o link da imagem do pet (unsplash por enquanto)"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="age"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Idade:
                                        </Label>
                                        <Input
                                            id="age"
                                            name="age"
                                            type="number"
                                            min="0"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? (pet[0].age as number)
                                                    : 0
                                            }
                                            placeholder="Insira a idade se souber"
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="location"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Local:
                                        </Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            type="text"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? pet[0].location
                                                    : ""
                                            }
                                            placeholder="Ex: SP, Campinas"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="status"
                                            className="block text-sm font-medium text-gray-700 md:text-base"
                                        >
                                            Status:
                                        </Label>

                                        <select
                                            id="status"
                                            name="status"
                                            defaultValue={
                                                typeForm === "edit"
                                                    ? pet[0].status
                                                    : "encontrado"
                                            }
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="encontrado">
                                                Encontrado
                                            </option>
                                            <option value="adocao">
                                                Adoção
                                            </option>
                                            <option value="perdido">
                                                Perdido
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid gap-2 mt-6 items-center">
                                    <Label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700 md:text-base"
                                    >
                                        Descrição:
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        defaultValue={
                                            typeForm === "edit"
                                                ? (pet[0].description as string)
                                                : ""
                                        }
                                        rows={4}
                                        placeholder="Descreva o pet..."
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
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
                                <div className="flex flex-col items-center gap-4 px-4 mt-6 border-t-2 border-gray-200">
                                    <Button
                                        type="submit"
                                        className="w-lg cursor-pointer"
                                    >
                                        {isPending ? "Salvando..." : "Salvar"}
                                    </Button>
                                    <Link
                                        href="/pets"
                                        className="w-lg cursor-pointer outline flex items-center justify-center px-3 py-2 rounded-lg"
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
