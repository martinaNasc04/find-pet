import React from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function InsertPetForm() {
    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2 space-y-4">
                <h1 className="text-2xl font-bold">Poste o pet aqui</h1>
                <div className="w-full flex flex-col items-center justify-center">
                    <Card className="w-full max-w-xl">
                        <CardHeader className="border-b-2 border-indigo-100">
                            <CardTitle>Coloque as informações do pet</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="grid gap-2 ">
                                        <Label
                                            htmlFor="name"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Nome:
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Insira o nome do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="breed"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Raça:
                                        </Label>
                                        <Input
                                            id="breed"
                                            name="breed"
                                            type="text"
                                            placeholder="Insira a raça do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="color"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Cor
                                        </Label>
                                        <Input
                                            id="color"
                                            name="color"
                                            type="text"
                                            placeholder="Insira a cor do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="typePet"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Tipo de pet:
                                        </Label>
                                        <Input
                                            id="typePet"
                                            name="typePet"
                                            type="text"
                                            placeholder="Insira o tipo de pet: gato ou cachorro"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="imageUrl"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Imagem:
                                        </Label>
                                        <Input
                                            id="imageUrl"
                                            name="imageUrl"
                                            type="text"
                                            placeholder="Insira o link da imagem do pet (unsplash por enquanto)"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="age"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Idade:
                                        </Label>
                                        <Input
                                            id="age"
                                            name="age"
                                            type="number"
                                            placeholder="Insira a idade do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="location"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Local:
                                        </Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            type="text"
                                            placeholder="Insira o local"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="status"
                                            className="block text-sm md:text-base font-medium text-gray-700"
                                        >
                                            Status:
                                        </Label>
                                        <Input
                                            id="status"
                                            name="status"
                                            type="name"
                                            placeholder="Insira o nome do pet"
                                            required
                                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2 mt-6">
                                    <Label
                                        htmlFor="description"
                                        className="block text-sm md:text-base font-medium text-gray-700"
                                    >
                                        Descrição:
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        required
                                        rows={4}
                                        placeholder="Descreva o pet..."
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Salvar
                            </Button>
                            <Button variant="outline" className="w-full">
                                Cancelar
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
