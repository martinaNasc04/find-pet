"use client";
import { insertUser, updateUser } from "@/lib/actions/user";
import { UserDatabase } from "../../type";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { User, X } from "lucide-react";
import Link from "next/link";
import { CldUploadButton } from "next-cloudinary";

const initialState = {
    success: false,
    message: "",
};
interface UserFormProps {
    typeForm: string;
    userDb?: UserDatabase[];
}

export default function UserForm({ typeForm, userDb }: UserFormProps) {
    const action = typeForm === "insert" ? insertUser : updateUser;
    const router = useRouter();
    const { user } = useUser();
    const [state, formAction, isPending] = useActionState(action, initialState);

    // Informação do usuário vindo do Clerk
    const fullName = user?.fullName as string;
    const email = user?.primaryEmailAddress?.emailAddress as string;

    const [imageUrl, setImageUrl] = useState<string>("");
    const handleUploadSuccess = (result: any) => {
        setImageUrl(result.info.secure_url);
    };
    useEffect(() => {
        if (state.success) {
            const timeOut = setTimeout(() => {
                if (typeForm === "insert") {
                    router.push("/pets");
                }
                router.push("/user");
            }, 3000);
            return () => clearTimeout(timeOut);
        }
    }, [state.success, router, typeForm]);

    if (userDb === undefined && typeForm === "edit") {
        return (
            <div className="min-h-screen p-8 mt-10 bg-gray-50">
                <div className="max-w-6xl mx-auto mb-2 space-y-4">
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <h1 className="text-2xl font-bold">
                            Usuário não existe
                        </h1>
                        <X />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2 space-y-4">
                <div className="flex items-center justify-center gap-2 mt-4">
                    <h1 className="text-2xl font-bold">
                        {typeForm === "insert"
                            ? "Crie seu Perfil"
                            : "Atualize seu Perfil"}
                    </h1>
                    <User />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <Card className="w-full max-w-xl">
                    <CardHeader className="border-b-2 border-indigo-100">
                        <CardTitle>
                            {typeForm === "insert"
                                ? "Insira as suas informações"
                                : "Atualize as suas informações"}
                        </CardTitle>
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
                                        defaultValue={
                                            typeForm === "edit"
                                                ? (userDb[0].fullName as string)
                                                : fullName
                                        }
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
                                        defaultValue={
                                            typeForm === "edit"
                                                ? (userDb[0].email as string)
                                                : email
                                        }
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
                                        defaultValue={
                                            typeForm === "edit"
                                                ? (userDb[0].age as number)
                                                : imageUrl
                                        }
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
                                    <CldUploadButton
                                        onSuccess={handleUploadSuccess}
                                        uploadPreset="findpet"
                                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        Baixar imagem
                                    </CldUploadButton>
                                    <Input
                                        type="hidden"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={imageUrl}
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
                            <div className="flex flex-col items-center gap-4 px-4 py-4 mt-6 border-t-2 border-gray-200">
                                <Button
                                    type="submit"
                                    className="cursor-pointer w-lg"
                                >
                                    {isPending ? "Aguarde..." : "Salvar"}
                                </Button>
                                <Link
                                    href="/"
                                    className="flex items-center justify-center px-3 py-2 rounded-lg cursor-pointer w-lg outline"
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
