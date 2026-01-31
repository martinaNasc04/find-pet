"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";
import { useState } from "react";

const pets = [
    {
        name: "Mel",
        age: 2,
        local: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfDJ8MHx8fDA%3D",
        status: "adocao",
        createdAt: "23/01/2026",
    },
    {
        name: "Toby",
        age: 1,
        local: "Ribeirão Preto, SP",
        image: "https://images.unsplash.com/photo-1599765625577-61a6e65e3567?q=80&w=553&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "perdido",
        createdAt: "22/12/2023",
    },
    {
        name: "Mona",
        age: 3,
        local: "Campinas, SP",
        image: "https://images.unsplash.com/photo-1737309657220-025e96d413fe?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "encontrado",
        createdAt: "15/12/2023",
    },
];

export default function PetPage() {
    const [activeTab, setActiveTab] = useState("perdido");
    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            {/* Tabs: Encontrado, Perdido, Adoção */}
            <div className="max-w-6xl mx-auto mb-2 border-2 border-yellow-500">
                <div className="flex items-center justify-center space-x-5">
                    {["perdido", "encontrado", "adocao"].map((tab) => (
                        <Button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                            }}
                            className={`px-3 mb:px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer
                            ${
                                activeTab === tab
                                    ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500 border-2 border-blue-500"
                                    : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white border-2 border-blue-500"
                            }`}
                        >
                            {tab === "adocao"
                                ? "Adoção"
                                : tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </Button>
                    ))}
                    {/* Adicionar botões para adicionar pets and visualizar o pet postado */}
                </div>
            </div>

            <div className="flex gap-8">
                {/* Sidebar Filtro */}
                <aside className="w-64 p-6 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-black">
                            Filtrar
                        </h2>
                        <Button
                            className="text-sm text-blue-600 cursor-pointer hover:text-blue-700"
                            variant="outline"
                        >
                            Limpar
                        </Button>
                    </div>
                    {/* Procurar */}
                    <div className="mb-4">
                        <Label className="block mb-2 text-sm font-medium text-black">
                            Procurar
                        </Label>
                        <Input
                            type="text"
                            placeholder="Nome ou raça..."
                            className="w-full px-3 py-2 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Filtro da raça */}
                    <div className="mb-4 text-black">
                        <Label className="block mb-2 text-sm font-medium">
                            Selecione a raça
                        </Label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="Raças">Raças</option>
                            <option value="Pitbull">Pitbull</option>
                            <option value="Golden Retriever">
                                Golden Retriever
                            </option>
                            <option value="Poodle">Poodle</option>
                            <option value="Pincher">Pincher</option>
                        </select>
                    </div>
                    {/* Filtro de cor */}
                    <div className="mb-4 text-black">
                        <Label className="block mb-2 text-sm font-medium">
                            Selecione a cor
                        </Label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="Cores">Cores</option>
                            <option value="Caramelo">Caramelo</option>
                            <option value="Preto">Preto</option>
                            <option value="Branco">Branco</option>
                            <option value="Misturado">Misturado</option>
                        </select>
                    </div>
                    {/* Filtro de localização */}
                    <div className="mb-4 text-black">
                        <Label className="block mb-2 text-sm font-medium">
                            Local
                        </Label>
                        <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="Local">Local</option>
                            <option value="Campinas">Campinas</option>
                            <option value="Ribeirão Preto">
                                Ribeirão Preto
                            </option>
                            <option value="São Paulo">São Paulo</option>
                        </select>
                    </div>
                </aside>

                {/* Resultados */}
                <main className="flex-1">
                    <div className="flex justify-between mb-4">
                        {/* Header */}
                        <div className="flex flex-col">
                            <h2>
                                {activeTab === "adocao"
                                    ? "Pets para adoção"
                                    : "Pets " +
                                      activeTab.charAt(0) +
                                      activeTab.slice(1)}
                            </h2>
                        </div>
                    </div>
                    {/* Pet cards */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {pets.map((pet, key) => (
                            <Card key={key} className="overflow-hidden">
                                <CardContent className="p-0">
                                    {/* Image */}
                                    <div className="relative w-full h-48 md:h-64">
                                        <Image
                                            src={pet.image}
                                            alt={`Photo of ${pet.name}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <h3 className="text-lg font-semibold truncate md:text-xl">
                                            {pet.name}
                                        </h3>
                                        <div className="space-y-1 text-sm text-gray-600 md:text-base">
                                            <p className="text-sm md:text-xl">
                                                <span className="font-semibold">
                                                    Idade:
                                                </span>{" "}
                                                {pet.age}
                                            </p>
                                            <p className="text-sm md:text-xl">
                                                <span className="font-semibold">
                                                    Local:
                                                </span>{" "}
                                                {pet.local}
                                            </p>
                                            <p className="text-sm md:text-xl">
                                                <span
                                                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium
                                                    ${
                                                        pet.status === "Perdido"
                                                            ? "bg-amber-100 text-amber-800"
                                                            : pet.status ===
                                                                "Encontrado"
                                                              ? "bg-blue-100 text-blue-800"
                                                              : "bg-emerald-100 text-emerald-800"
                                                    }`}
                                                >
                                                    Status:
                                                </span>{" "}
                                                {pet.status}
                                            </p>
                                            <p className="text-sm md:text-xl">
                                                <span className="font-semibold">
                                                    Postado em:
                                                </span>{" "}
                                                {pet.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
