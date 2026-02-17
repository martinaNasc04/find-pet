"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCallback, useEffect, useState } from "react";
import { PetsDatabase } from "../../../type";
import PetCard from "@/components/PetCard";
import SpinnerSizesDemo from "@/components/customized/spinner/spinner-05";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function PetPage() {
    const [activeTab, setActiveTab] = useState("perdido");
    const [pets, setPets] = useState<PetsDatabase[]>([]);
    const [loading, setLoading] = useState(false);
    const { isSignedIn } = useAuth();

    //Filtros
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBreed, setSelectedBreed] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedTypePet, setSelectedTypePet] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    // Buscar pets
    const fetchPets = useCallback(async () => {
        setLoading(true);
        try {
            //Construir URL com os parâmetros de busca
            const params = new URLSearchParams({
                status: activeTab,
                ...(selectedBreed && { breed: selectedBreed }),
                ...(selectedColor && { color: selectedColor }),
                ...(selectedTypePet && { typePet: selectedTypePet }),
                ...(selectedLocation && { location: selectedLocation }),
                ...(searchQuery && { search: searchQuery }),
            });

            const response = await fetch(`/api/pets?${params}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPets(data.pets);
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
            setPets([]);
        } finally {
            setLoading(false);
        }
    }, [
        activeTab,
        selectedBreed,
        selectedColor,
        selectedTypePet,
        selectedLocation,
        searchQuery,
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPets();
        }, 300);
        return () => clearTimeout(timer);
    }, [fetchPets]);

    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            {/* Tabs: Encontrado, Perdido, Adoção */}
            <div className="max-w-6xl mx-auto mb-2">
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
                        <div className="flex gap-2">
                            <h2>
                                {activeTab === "adocao"
                                    ? "Pets para adoção: "
                                    : activeTab === "perdido"
                                      ? "Pets perdidos: "
                                      : "Pets encontrados: "}
                            </h2>
                            <p className="text-gray-600">
                                {loading ? "Carregando..." : `${pets.length}`}
                            </p>
                        </div>
                    </div>
                    {/* Pet cards */}
                    {loading ? (
                        <div className="flex items-center justify-center">
                            {/* <p className="col-span-2 text-center text-gray-500">
                                Carregando...
                            </p> */}
                            <SpinnerSizesDemo />
                        </div>
                    ) : pets.length === 0 ? (
                        <div className="flex items-center justify-center">
                            <p className="col-span-2 text-center text-gray-500">
                                Nenhum pet encontrado
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {pets.map((pet) => (
                                <PetCard
                                    pet={pet}
                                    key={pet.id}
                                    session={false}
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
