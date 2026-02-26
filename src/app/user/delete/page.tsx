"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { deleteUser } from "@/lib/actions/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteUserPage() {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const result = await deleteUser();
            if (!result) {
                return alert("Erro ao deletar usuário");
            } else if (result.success) {
                alert(result.message);
                router.push("/");
            } else {
                alert(`Erro ao deletar usuário: ${result.message}`);
            }
            setIsDeleting(false);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : error;
            alert(`Erro ao deletar usuário: ${errorMessage}`);
        } finally {
            setIsDeleting(false);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen p-8 mt-10 bg-gray-50">
            <div className="max-w-6xl mx-auto mb-2 ">
                <div className="flex items-center justify-center gap-2 mb-4">
                    {" "}
                    <Card className="w-full max-w-sm mx-auto">
                        <CardHeader>
                            <CardTitle>Deletar Conta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Você tem certeza de que gostaria de deletar sua
                                conta?
                            </p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-center gap-4 p-2">
                            <Button
                                variant="destructive"
                                className="px-4 py-2 text-sm cursor-pointer md:text-base"
                                onClick={handleDelete}
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Deletando" : "Deletar"}
                            </Button>

                            <Button
                                variant="default"
                                className="px-4 py-2 text-sm cursor-pointer md:text-base"
                            >
                                <Link href="/user"> Cancelar </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
