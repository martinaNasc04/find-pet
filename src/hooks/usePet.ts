import { useCallback, useEffect, useState } from "react";
import { FilterOptions, PetsDatabase } from "../../type";
import {
    getBreeds,
    getColors,
    getLocations,
    getPetTypes,
} from "@/lib/actions/pet";

export const usePet = () => {
    const [activeTab, setActiveTab] = useState("perdido");
    const [pets, setPets] = useState<PetsDatabase[]>([]);
    const [options, setOptions] = useState<FilterOptions>({
        breeds: [],
        colors: [],
        typePets: [],
        locations: [],
    });
    const [loading, setLoading] = useState(false);

    //Filtros
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBreed, setSelectedBreed] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedTypePet, setSelectedTypePet] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const clearFilters = () => {
        setSelectedBreed("");
        setSelectedColor("");
        setSelectedTypePet("");
        setSelectedLocation("");
        setSearchQuery("");
    };

    const activeFilterCount = [
        selectedBreed,
        selectedColor,
        selectedTypePet,
        selectedLocation,
    ].filter(Boolean).length;

    // Buscar pets
    const fetchPets = useCallback(
        async (signal?: AbortSignal) => {
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

                const response = await fetch(`/api/pets?${params}`, { signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPets(data.pets);
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    return;
                }
            } finally {
                setLoading(false);
            }
        },
        [
            activeTab,
            selectedBreed,
            selectedColor,
            selectedTypePet,
            selectedLocation,
            searchQuery,
        ],
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPets();
        }, 300);
        return () => clearTimeout(timer);
    }, [fetchPets]);

    useEffect(() => {
        const fetchFilterOptions = async () => {
            try {
                const [breedsData, colorsData, typePetsData, locationsData] =
                    await Promise.all([
                        getBreeds(),
                        getColors(),
                        getPetTypes(),
                        getLocations(),
                    ]);

                setOptions({
                    breeds: breedsData
                        .map((item) => item.breed)
                        .filter(Boolean) as string[],
                    colors: colorsData
                        .map((item) => item.color)
                        .filter(Boolean) as string[],
                    typePets: typePetsData
                        .map((item) => item.typePet)
                        .filter(Boolean) as string[],
                    locations: locationsData
                        .map((item) => item.location)
                        .filter(Boolean) as string[],
                });
            } catch (error) {
                console.error("Error fetching filter options:", error);
            }
        };
        fetchFilterOptions();
    }, []);

    const filters = {
        options,
        setOptions,
        searchQuery,
        setSearchQuery,
        selectedBreed,
        setSelectedBreed,
        selectedColor,
        setSelectedColor,
        selectedTypePet,
        setSelectedTypePet,
        selectedLocation,
        setSelectedLocation,
        activeFilterCount,
        clearFilters,
    };

    return {
        activeTab,
        setActiveTab,
        pets,
        loading,
        filters,
    };
};
