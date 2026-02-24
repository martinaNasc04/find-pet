import Link from "next/link";
import pawprint from "../../public/assets/paw-print.png";
import { Button } from "./ui/button";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import { checkUserExist } from "@/lib/actions/user";

export default async function SignedInSection() {
    // Verificar se usuário tem um perfil criado
    const existingUser = await checkUserExist();

    return (
        <section className="relative flex items-center justify-center min-h-screen ">
            <Image
                src={pawprint}
                alt="pawprint"
                className=" opacity-20 w-fit"
                width={800}
                height={800}
            />

            <div className="absolute items-center justify-center w-full md:flex ">
                <div className="flex flex-col items-center space-y-4 md:w-1/2 md:space-y-6">
                    <div className="flex items-center justify-center gap-2 mb-10 ">
                        <h1 className="text-6xl font-semibold md:text-6xl">
                            FindPet
                        </h1>
                        <PawPrint className="w-14 h-14" />
                    </div>
                    <h2 className="text-xl font-semibold md:text-3xl">
                        Bem vindo(a) ao FindPet
                    </h2>
                    {/* Se o usuário não tiver um perfil */}
                    {existingUser.length === 0 ? (
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="font-medium md:text-2xl">
                                Parece que você não tem um perfil criado.
                            </h2>
                            <Link href="/user/new">
                                <Button
                                    size={"lg"}
                                    className="bg-[#3F51B5] font-semibold hover:bg-[#5969C5]/90 cursor-pointer"
                                >
                                    Crie seu perfil aqui
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="font-medium md:text-2xl">
                                Visualize os pets postados recentemente ou faça
                                um novo post!
                            </h2>
                            <Link href="/pets">
                                <Button
                                    size={"lg"}
                                    className="bg-[#3F51B5] font-semibold hover:bg-[#5969C5]/90 cursor-pointer"
                                >
                                    Visualizar pets!
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
