import { PetsDatabase } from "../../type";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface Props {
    initialPets: PetsDatabase[];
}
export default function RecentPet({ initialPets }: Props) {
    // Define a configuração de cores e rótulos para cada status
    const statusConfig: Record<string, { bg: string; label: string }> = {
        perdido: { bg: "bg-red-100 text-red-800", label: "Perdido" },
        encontrado: { bg: "bg-green-100 text-green-800", label: "Encontrado" },
        adocao: { bg: "bg-blue-100 text-blue-800", label: "Adoção" },
    };

    return (
        <Carousel className="w-full max-w-5xl px-4 mx-auto">
            <CarouselContent>
                {initialPets.map((pet, key) => {
                    const currentStatus = statusConfig[pet.status];
                    return (
                        <CarouselItem
                            key={key}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-2">
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        {/* Image */}
                                        {pet.imageUrl ? (
                                            <div className="relative w-full h-48 md:h-64">
                                                <Image
                                                    src={pet.imageUrl}
                                                    alt={`Photo of ${pet.name}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative w-full h-48 md:h-64 bg-gray-300 flex items-center justify-center">
                                                <p className="text-gray-500 text-2xl md:text-lg">
                                                    Sem imagem
                                                </p>
                                            </div>
                                        )}

                                        <div className="p-4 space-y-2">
                                            <h3 className="text-lg font-semibold truncate md:text-xl">
                                                {pet.name}
                                            </h3>
                                            <div className="space-y-1 text-sm text-gray-600 md:text-base">
                                                <p className="text-sm md:text-xl">
                                                    <span className="font-semibold">
                                                        Idade:
                                                    </span>{" "}
                                                    {pet.age === null ||
                                                    pet.age === 0
                                                        ? "Sem idade"
                                                        : pet.age}
                                                </p>
                                                <p className="text-sm md:text-xl">
                                                    <span className="font-semibold">
                                                        Local:
                                                    </span>{" "}
                                                    {pet.location}
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
                                                    <span className="font-semibold">
                                                        Postado em:
                                                    </span>{" "}
                                                    {new Date(
                                                        pet.createdAt,
                                                    ).toLocaleDateString(
                                                        "pt-BR",
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious
                className="hidden cursor-pointer  md:flex"
                variant="default"
                size="icon-lg"
            />
            <CarouselNext
                className="hidden cursor-pointer  md:flex"
                variant="default"
                size="icon-lg"
            />
        </Carousel>
    );
}
