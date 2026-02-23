import { FilterPetsProps } from "./FilterPets";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { optionBreeds, optionColors } from "@/data/petConstants";

export default function FilterToggle({
    options,
    selectedBreed,
    searchQuery,
    selectedTypePet,
    selectedLocation,
    setSelectedBreed,
    selectedColor,
    setSelectedColor,
    setSelectedTypePet,
    setSelectedLocation,
    setSearchQuery,
    clearFilters,
    menuOpen,
    setMenuOpen,
}: FilterPetsProps) {
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-white rounded-lg shadow-md z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out 
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            `}
        >
            <Button
                className=" flex items-center justify-center absolute text-3xl cursor-pointer top-6 right-6 focus:outline-none"
                aria-label="Fechar filtro"
                onClick={() => setMenuOpen(false)}
            >
                &times;
            </Button>
            <Button
                className=" flex items-center justify-center absolute text-sm cursor-pointer bottom-2 right-6 focus:outline-none"
                aria-label="Limpar filtros"
                onClick={() => clearFilters()}
            >
                Limpar
            </Button>

            <div className="mt-4 space-y-3">
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
                        value={selectedBreed}
                        placeholder="Raça..."
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
                        value={selectedColor}
                        placeholder="Cor..."
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
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Tipo</option>
                        <option value="gato">Gato</option>
                        <option value="cachorro">Cachorro</option>
                    </select>
                </div>
                {/* Filtro de localização */}
                <div className="mb-4 text-black">
                    <Label className="block mb-2 text-sm font-medium">
                        Local
                    </Label>
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
            </div>
        </div>
    );
}
