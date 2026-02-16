"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { insertUser } from "@/lib/actions/user";
import { useUser } from "@clerk/nextjs";
import { Label } from "@radix-ui/react-label";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const initialState = {
    success: false,
    message: "",
};
export default function CreateProfilePage() {
    const { user } = useUser();
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(
        insertUser,
        initialState,
    );
    useEffect(() => {
        if (state.success) {
            router.push("/");
        }
    }, [state.success, router]);

    const fullName = user?.fullName as string;
    const email = user?.primaryEmailAddress?.emailAddress as string;
    const imageUrl = user?.imageUrl as string;
    return (
        <div className="max-w-6xl mx-auto mb-2 space-y-4">
            <div className="flex items-center justify-center gap-2 mt-4">
                <h1 className="text-2xl font-bold">Crie seu perfil</h1>
                <User />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <Card className="w-full max-w-xl">
                    <CardHeader className="border-b-2 border-indigo-100">
                        <CardTitle>Insira as suas informações</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form action={formAction}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="grid gap-2 ">
                                    <Label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray-700 md:text-base"
                                    >
                                        Nome completo:
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        defaultValue={fullName}
                                        type="text"
                                        placeholder="Seu nome completo"
                                        required
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 md:text-base"
                                    >
                                        Email:
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue={email}
                                        placeholder="Seu email"
                                        required
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="age"
                                        className="block text-sm font-medium text-gray-700 md:text-base"
                                    >
                                        Idade:
                                    </Label>
                                    <Input
                                        id="age"
                                        name="age"
                                        type="number"
                                        placeholder="Sua idade (mínimo 15 anos)"
                                        min="15"
                                        required
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="imageUrl"
                                        className="block text-sm font-medium text-gray-700 md:text-base"
                                    >
                                        Foto:
                                    </Label>
                                    <Input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="text"
                                        defaultValue={imageUrl}
                                        placeholder="URL da imagem do Clerk por enquanto"
                                        min="15"
                                        required
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>
                            {state.message && (
                                <div
                                    className={`${state.success ? "bg-green-300" : "bg-red-300"} p-2 mt-6 rounded-lg flex items-center justify-center`}
                                >
                                    <p
                                        className={
                                            state.success
                                                ? "text-green-700"
                                                : "text-red-700"
                                        }
                                    >
                                        {state.message}
                                    </p>
                                </div>
                            )}
                            <div className="flex flex-col items-center gap-4 py-4 px-4 mt-6 border-t-2 border-gray-200">
                                <Button
                                    type="submit"
                                    className="w-lg cursor-pointer"
                                >
                                    {isPending ? "Aguarde..." : "Criar perfil"}
                                </Button>
                                <Link
                                    href="/"
                                    className="w-lg cursor-pointer outline flex items-center justify-center px-3 py-2 rounded-lg"
                                >
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
