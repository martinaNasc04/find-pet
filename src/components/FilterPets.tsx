"use client";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { optionBreeds, optionColors } from "@/data/petConstants";
import { FilterOptions } from "../../type";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FunnelPlus } from "lucide-react";

export interface FilterPetsProps {
    options: FilterOptions;
    setOptions: Dispatch<SetStateAction<FilterOptions>>;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    selectedBreed: string;
    setSelectedBreed: Dispatch<SetStateAction<string>>;
    selectedColor: string;
    setSelectedColor: Dispatch<SetStateAction<string>>;
    selectedTypePet: string;
    setSelectedTypePet: Dispatch<SetStateAction<string>>;
    selectedLocation: string;
    setSelectedLocation: any;
    activeFilterCount: number;
    clearFilters: any;
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const FilterPets = ({
    options,
    selectedBreed,
    selectedColor,
    searchQuery,
    selectedTypePet,
    selectedLocation,
    setSelectedBreed,
    setSelectedColor,
    setSelectedTypePet,
    setSelectedLocation,
    setSearchQuery,
    clearFilters,
    menuOpen,
    setMenuOpen,
}: FilterPetsProps) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <aside className="w-64 p-6 hidden md:block bg-white rounded-lg shadow-md  ">
            <div
                className="relative z-40 h-5 cursor-pointer w-7 md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <FunnelPlus />
            </div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-black">Filtrar</h2>
                <Button
                    className="text-sm text-blue-600 cursor-pointer hover:text-blue-700"
                    variant="outline"
                    onClick={clearFilters}
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
                    placeholder="Raça, cor ou tipo de pet..."
                    className="w-full px-3 py-2 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Filtro da raça */}
            <div className="mb-4 text-black">
                <Label className="block mb-2 text-sm font-medium">
                    Selecione a raça
                </Label>
                <input
                    type="text"
                    name="breed"
                    id="breed"
                    placeholder="Raça..."
                    value={selectedBreed}
                    className="w-full px-3 py-2 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSelectedBreed(e.target.value)}
                    list="breedsList"
                />
                <datalist id="breedsList">
                    {optionBreeds.map((optionBreed) => (
                        <option
                            key={optionBreed.value}
                            value={optionBreed.value}
                        >
                            {optionBreed.label}
                        </option>
                    ))}
                </datalist>
            </div>
            {/* Filtro de cor */}
            <div className="mb-4 text-black">
                <Label className="block mb-2 text-sm font-medium">
                    Selecione a cor
                </Label>
                <input
                    type="text"
                    name="color"
                    id="color"
                    placeholder="Cor..."
                    value={selectedColor}
                    className="w-full px-3 py-2 text-gray-600 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => {
                        setSelectedColor(e.target.value);
                    }}
                    list="colorsList"
                />
                <datalist id="colorsList">
                    {optionColors.map((optionColor) => (
                        <option
                            key={optionColor.value}
                            value={optionColor.value}
                        >
                            {optionColor.label}
                        </option>
                    ))}
                </datalist>
            </div>
            {/* Filtro de tipo */}
            <div className="mb-4 text-black">
                <Label className="block mb-2 text-sm font-medium">
                    Selecione o tipo de pet
                </Label>
                <select
                    value={selectedTypePet}
                    onChange={(e) => setSelectedTypePet(e.target.value)}
                    disabled={!options.typePets.length}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Tipo</option>
                    <option value="gato">Gato</option>
                    <option value="cachorro">Cachorro</option>
                </select>
            </div>
            {/* Filtro de localização */}
            <div className="mb-4 text-black">
                <Label className="block mb-2 text-sm font-medium">Local</Label>
                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    disabled={!options.locations.length}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Local</option>
                    {options.locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
        </aside>
    );
};
