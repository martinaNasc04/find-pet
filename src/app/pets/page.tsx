"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useCallback, useEffect, useState } from "react";

import PetCard from "@/components/PetCard";
import SpinnerSizesDemo from "@/components/customized/spinner/spinner-05";
import { usePet } from "@/hooks/usePet";
import { FunnelIcon } from "lucide-react";

import { FilterPets } from "@/components/FilterPets";
import FilterToggle from "@/components/FilterToggle";

export default function PetPage() {
    const { activeTab, pets, loading, filters, setActiveTab } = usePet();

    const [menuOpen, setMenuOpen] = useState(false);

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
                                filters.clearFilters();
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
                <FilterPets
                    {...filters}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

                {/* Mobile filter */}
                <FilterToggle
                    {...filters}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

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
                            <Button
                                aria-label="Abrir Filtro"
                                variant="ghost"
                                className="relative z-0 h-5 cursor-pointer w-7 md:hidden"
                                onClick={() => setMenuOpen((prev) => !prev)}
                            >
                                <FunnelIcon />
                            </Button>
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
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
