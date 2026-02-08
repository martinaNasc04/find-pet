"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { PawPrint } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    // Verificar se usuário está logado
    const { isSignedIn } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (isSignedIn) {
            router.push("/");
        }
    }, [isSignedIn, router]);
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-lg">
                <CardHeader className="flex flex-col items-center justify-center space-y-2">
                    <CardTitle className="flex items-center gap-4 text-3xl">
                        Acesse sua conta por aqui
                        <PawPrint className="w-10 h-10" />
                    </CardTitle>
                    <CardDescription className="flex justify-center text-xl">
                        Faça login ou cadastre-se para continuar
                    </CardDescription>
                    <div className="flex flex-col w-full p-10 space-y-5 border-2 border-gray-200">
                        <SignInButton mode="modal">
                            <Button className="px-6 py-4 bg-linear-to-r from-[#3F51B5] to-[#8F8CB8] cursor-pointer">
                                Entrar
                            </Button>
                        </SignInButton>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 text-gray-500 bg-white">
                                    ou
                                </span>
                            </div>
                        </div>
                        <SignUpButton mode="modal">
                            <Button className="px-6 py-4 bg-linear-to-r from-[#3F51B5] to-[#8F8CB8] cursor-pointer">
                                Cadastrar
                            </Button>
                        </SignUpButton>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}
