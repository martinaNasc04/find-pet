import { getPetsWithFilters } from "@/lib/actions/pet";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    // Filtros pelos parâmetros da URL
    const filters = {
        status: searchParams.get("status") || "perdido",
        breed: searchParams.get("breed") || "",
        color: searchParams.get("color") || "",
        typePet: searchParams.get("typePet") || "",
        location: searchParams.get("location") || "",
        search: searchParams.get("search") || "",
    };

    try {
        try {
            const data = await getPetsWithFilters(filters);
            return NextResponse.json(data);
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
            return NextResponse.json(
                { error: "Erro ao buscar pets" },
                { status: 500 },
            );
        }
    } catch (error) {
        console.error("Erro ao buscar pets:", error);
        return NextResponse.json(
            {
                error: "Erro ao buscar pets",
            },
            {
                status: 500,
            },
        );
    }
}
