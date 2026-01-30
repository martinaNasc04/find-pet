import AboutSection from "@/components/About";
import instagram from "../../public/assets/svg/instagram-svgrepo-com.svg";
import email from "../../public/assets/svg/email-1573-svgrepo-com.svg";
import twitter from "../../public/assets/svg/twitter-svgrepo-com.svg";
import phone from "../../public/assets/svg/phone-call-svgrepo-com.svg";
import catDraw from "../../public/assets/cat_draw.png";
import pawprint from "../../public/assets/paw-print.png";
import cat from "../../public/assets/cat.png";
import Image from "next/image";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecentPet from "@/components/RecentPet";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen mx-8">
            {/* Hero Section */}
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
                            <h1 className="text-4xl font-semibold md:text-6xl">
                                FindPet
                            </h1>
                            <PawPrint className="w-14 h-14" />
                        </div>
                        <h2 className="text-xl font-semibold md:text-3xl">
                            Ajude a trazer seu amigo de volta para casa ou adote
                            um companheiro hoje!
                        </h2>

                        <h2 className="font-medium md:text-2xl">
                            Se você encontrou um animal perdido ou deseja adotar
                            um amigo de quatro patas, estamos aqui para ajudar!
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
            <AboutSection />
            {/* Pet Section */}
            <section className="relative flex items-center justify-center min-h-screen ">
                <Image
                    src={pawprint}
                    alt="pawprint"
                    className=" opacity-20 w-fit"
                    width={800}
                    height={800}
                />
                <div className="absolute items-center justify-center w-full md:space-x-28 md:flex">
                    <div className="flex flex-col items-center justify-center ">
                        <h1 className="text-4xl font-semibold md:text-6xl mb-2">
                            Animais postados recentemente
                        </h1>

                        <RecentPet />
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="relative flex items-center justify-center min-h-screen ">
                <Image
                    src={pawprint}
                    alt="pawprint"
                    className=" opacity-20 w-fit"
                    width={800}
                    height={800}
                />
                <div className="absolute items-center w-full md:space-y-6 md:flex md:flex-col">
                    <div className="flex flex-col items-center space-y-5 md:w-1/2 md:space-y-10">
                        <h1 className="text-4xl font-semibold md:text-6xl">
                            Fale conosco:
                        </h1>
                        <ul className="grid grid-cols-2 gap-10">
                            <li className="flex items-center gap-2">
                                <Image
                                    src={instagram}
                                    alt="instagram"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                                <a href="#" className="font-medium md:text-2xl">
                                    @findpet_oficial
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image
                                    src={twitter}
                                    alt="twiiter"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                                <a href="#" className="font-medium md:text-2xl">
                                    @findpet_oficial
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image
                                    src={phone}
                                    alt="email"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                                <a href="#" className="font-medium md:text-2xl">
                                    (11) 3434-3434
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Image
                                    src={email}
                                    alt="email"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                />
                                <a href="#" className="font-medium md:text-2xl">
                                    findpet@pet.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <Image
                        src={catDraw}
                        width={300}
                        height={300}
                        alt="cat"
                        className="hidden w-1/5 h-1/5 md:flex"
                    />
                </div>
            </section>
        </div>
    );
}
