import { Button } from "@/components/ui/button";
import { getCurrentUserInfo } from "@/lib/actions/user";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function UserPage() {
    const userInfo = await getCurrentUserInfo();
    const { fullName, email, imageUrl, createdAt } = userInfo[0];
    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <h1 className="text-4xl font-bold text-center text-black ">
                        Seu Perfil
                    </h1>
                    <PawPrint className="w-10 h-10" />
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 shadow-xl md:justify-center md:grid-cols-2">
                    <div className="flex flex-col items-center w-full ">
                        {imageUrl ? (
                            <div className="relative w-48 overflow-hidden bg-gray-100 rounded-lg md:w-64 aspect-square">
                                <Image
                                    src={imageUrl}
                                    alt={`Photo of ${fullName}`}
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
                    </div>
                    <div className="flex flex-col items-center justify-center w-full space-y-4">
                        <h1 className="text-xl font-semibold md:text-3xl ">
                            Nome: <span className="font-bold">{fullName}</span>
                        </h1>
                        <p className="text-sm font-semibold md:text-xl ">
                            Email: <span className="font-bold">{email}</span>
                        </p>
                        <p className="text-sm font-semibold md:text-xl">
                            Conta criada em:{" "}
                            <span className="font-bold">
                                {new Date(createdAt).toLocaleDateString(
                                    "pt-BR",
                                )}
                            </span>
                        </p>

                        <div className="flex gap-4">
                            <Button className="px-4 py-2 text-sm text-white transition-colors bg-blue-600 cursor-pointer hover:bg-blue-500 md:text-base">
                                Editar Conta
                            </Button>
                            <Button
                                variant="destructive"
                                className="px-4 py-2 text-sm cursor-pointer md:text-base"
                            >
                                Deletar Conta
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
