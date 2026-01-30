import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const pets = [
    {
        name: "Mel",
        age: 2,
        local: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfDJ8MHx8fDA%3D",
        status: "Adoção",
        createdAt: "23/01/2026",
    },
    {
        name: "Toby",
        age: 1,
        local: "Ribeirão Preto, SP",
        image: "https://images.unsplash.com/photo-1599765625577-61a6e65e3567?q=80&w=553&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Perdido",
        createdAt: "22/12/2023",
    },
    {
        name: "Mona",
        age: 3,
        local: "Campinas, SP",
        image: "https://images.unsplash.com/photo-1737309657220-025e96d413fe?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Encontrado",
        createdAt: "15/12/2023",
    },
];
export default function RecentPet() {
    return (
        <Carousel className="w-full max-w-5xl px-4 mx-auto">
            <CarouselContent>
                {pets.map((pet, key) => (
                    <CarouselItem
                        key={key}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-2">
                            <Card className="overflow-hidden">
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
                        </div>
                    </CarouselItem>
                ))}
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
