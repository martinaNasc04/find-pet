import { db } from "@/db";
import { usersTable } from "@/db/schema/userSchema";
import { getPetById } from "@/lib/actions/pet";
import { eq } from "drizzle-orm";
import {
    Calendar,
    MapPin,
    PaintbrushIcon,
    PawPrint,
    PenTool,
    User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ViewPetPage({
    params,
}: {
    params: Promise<{ id: string[] }>;
}) {
    const resolvedParams = await params;
    const petId = resolvedParams.id[0];

    const petInfo = await getPetById(petId);
    // Verificar se o pet existe
    if (!petInfo[0]) {
        return (
            <div className="min-h-screen p-8 mt-10 bg-gray-50">
                Pet not found
            </div>
        );
    }
    const {
        name,
        imageUrl,
        breed,
        age,
        color,
        location,
        status,
        description,
        createdAt,
    } = petInfo[0];
    const userName = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.userId, petInfo[0].userId));
    const fullName = userName[0]?.fullName ?? "Usuário desconhecido";

    const statusConfig: Record<
        string,
        { bg: string; bgLight: string; label: string }
    > = {
        perdido: {
            bg: "bg-red-100 text-red-800",
            bgLight: "bg-red-200",
            label: "Perdido",
        },
        encontrado: {
            bg: "bg-green-100 text-green-800",
            bgLight: "bg-green-200",
            label: "Encontrado",
        },
        adocao: {
            bg: "bg-blue-100 text-blue-800",
            bgLight: "bg-blue-200",
            label: "Adoção",
        },
    };
    const currentStatus = statusConfig[status];
    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <Link
                href="/pets"
                className={` bg-${currentStatus.bgLight} rounded-lg px-4 py-2 mb-4`}
            >
                {" "}
                <p className={`text-${currentStatus.bg} text-sm md:text-xl`}>
                    Voltar
                </p>{" "}
            </Link>
            <div className="max-w-6xl mx-auto mb-2">
                <div className="flex flex-col items-center justify-between w-full gap-4 px-8 md:flex-row md:gap-14">
                    {imageUrl ? (
                        <div className="relative w-1/2 overflow-hidden bg-gray-100 rounded-lg md:w-full aspect-square">
                            <Image
                                src={imageUrl}
                                alt={`Photo of ${name}`}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                    ) : (
                        <div className="relative flex items-center justify-center w-full h-48 bg-gray-300 md:h-64">
                            <p className="text-lg text-gray-500 md:text-2xl">
                                Sem imagem
                            </p>
                        </div>
                    )}
                    <div
                        className={`flex flex-col items-center justify-center ${currentStatus.bg}/50 w-full p-2 space-y-3 md:space-y-2 rounded-lg`}
                    >
                        <h2
                            className={`${currentStatus.bg} text-lg md:text-2xl font-semibold px-4 py-2 rounded-lg`}
                        >
                            {name === null || name === "" ? "Sem nome" : name} -{" "}
                            {currentStatus.label}
                        </h2>
                        <p className="text-sm md:text-xl">
                            <span className="font-semibold">Postado em:</span>{" "}
                            {new Date(createdAt).toLocaleDateString("pt-BR")}
                        </p>
                        <hr className="w-full border-t-2 border-gray-300" />
                        <div className="flex gap-2">
                            <Calendar
                                className={`w-6 h-6 ${currentStatus.bg}`}
                            />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">Idade:</span>{" "}
                                {age === null || age === 0 ? "Sem idade" : age}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <PawPrint
                                className={`w-6 h-6 ${currentStatus.bg}`}
                            />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">Raça:</span>{" "}
                                {breed}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <PaintbrushIcon
                                className={`w-6 h-6 ${currentStatus.bg}`}
                            />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">Cor:</span>{" "}
                                {color}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <MapPin className={`w-6 h-6 ${currentStatus.bg}`} />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">Local:</span>{" "}
                                {location}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <PenTool
                                className={`w-6 h-6 ${currentStatus.bg}`}
                            />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">
                                    Descrição:
                                </span>{" "}
                                {""}
                                {description}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <User className={`w-6 h-6 ${currentStatus.bg}`} />
                            <p className="text-sm md:text-xl">
                                <span className="font-semibold">
                                    Anunciante:
                                </span>{" "}
                                {fullName}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
