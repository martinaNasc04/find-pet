import { Pets } from "../../type";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function PetCard({ pet }: { pet: Pets }) {
    const { name, age, location, imageUrl, status, createdAt } = pet;

    // Define a configuração de cores e rótulos para cada status
    const statusConfig: Record<string, { bg: string; label: string }> = {
        perdido: { bg: "bg-red-100 text-red-800", label: "Perdido" },
        encontrado: { bg: "bg-green-100 text-green-800", label: "Encontrado" },
        adocao: { bg: "bg-blue-100 text-blue-800", label: "Adoção" },
    };
    const currentStatus = statusConfig[status];
    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                {/* Image */}
                <div className="relative w-full h-48 md:h-64">
                    <Image
                        src={imageUrl}
                        alt={`Photo of ${name}`}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold truncate md:text-xl">
                        {name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 md:text-base">
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Idade:</span>{" "}
                            {age === null || age === 0 ? "Sem idade" : age}
                        </p>
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Local:</span>{" "}
                            {location}
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
                            <span className="font-semibold">Postado em:</span>{" "}
                            {new Date(createdAt).toLocaleDateString("pt-BR")}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
