import instagram from "../../public/assets/svg/instagram-svgrepo-com.svg";
import email from "../../public/assets/svg/email-1573-svgrepo-com.svg";
import twitter from "../../public/assets/svg/twitter-svgrepo-com.svg";
import phone from "../../public/assets/svg/phone-call-svgrepo-com.svg";
import catDraw from "../../public/assets/cat_draw.png";
import pawprint from "../../public/assets/paw-print.png";
import Image from "next/image";
import RecentPet from "@/components/RecentPet";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignedInSection from "@/components/SignedInSection";
import SignedOutSection from "@/components/SignedOutSection";
import AboutSection from "@/components/About";
import { getRecentPets } from "@/lib/actions/pet";

export default async function Home() {
    let recentPets: any = [];
    try {
        recentPets = await getRecentPets();
    } catch (error) {
        console.error("Falha ao buscar pets recentes:", error);
    }
    return (
        <div className="min-h-screen mx-8">
            <SignedOut>
                <SignedOutSection />
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
                            <h1 className="mb-2 text-4xl font-semibold md:text-6xl">
                                Animais postados recentemente
                            </h1>

                            <RecentPet initialPets={recentPets} />
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
                                    <a
                                        href="#"
                                        className="font-medium md:text-2xl"
                                    >
                                        @findpet_oficial
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src={twitter}
                                        alt="twiiter"
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                    <a
                                        href="#"
                                        className="font-medium md:text-2xl"
                                    >
                                        @findpet_oficial
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src={phone}
                                        alt="email"
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                    <a
                                        href="#"
                                        className="font-medium md:text-2xl"
                                    >
                                        (11) 3434-3434
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src={email}
                                        alt="email"
                                        className="w-8 h-8 md:w-10 md:h-10"
                                    />
                                    <a
                                        href="#"
                                        className="font-medium md:text-2xl"
                                    >
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
            </SignedOut>
            <SignedIn>
                <SignedInSection />
            </SignedIn>
        </div>
    );
}
