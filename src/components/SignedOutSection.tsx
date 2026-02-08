import Link from "next/link";
import pawprint from "../../public/assets/paw-print.png";
import cat from "../../public/assets/cat.png";
import { Button } from "./ui/button";
import { PawPrint } from "lucide-react";
import Image from "next/image";

export default async function SignedOutSection() {
    return (
        <section className="relative flex items-center justify-center min-h-screen ">
            <Image
                src={pawprint}
                alt="pawprint"
                className=" opacity-20 w-fit"
                width={800}
                height={800}
            />
            <div className="absolute items-center w-full md:flex ">
                <div className="flex flex-col items-center space-y-4 md:w-1/2 md:space-y-6">
                    <div className="flex items-center justify-center gap-2 mb-10 ">
                        <h1 className="text-6xl font-semibold md:text-6xl">
                            FindPet
                        </h1>
                        <PawPrint className="w-14 h-14" />
                    </div>
                    <h2 className="text-xl font-semibold md:text-3xl">
                        Ajude a trazer seu amigo de volta para casa ou adote um
                        companheiro hoje!
                    </h2>

                    <h2 className="font-medium md:text-2xl">
                        Se você encontrou um animal perdido ou deseja adotar um
                        amigo de quatro patas, estamos aqui para ajudar!
                    </h2>

                    <Link href="/login">
                        <Button
                            size={"lg"}
                            className="bg-[#3F51B5] font-semibold hover:bg-[#5969C5]/90 cursor-pointer"
                        >
                            Clique aqui!
                        </Button>
                    </Link>
                </div>
            </div>
            <Image
                src={cat}
                alt="cat"
                className="absolute bottom-0 right-0 hidden w-1/2 md:flex"
            />
        </section>
    );
}
