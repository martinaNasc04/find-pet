"use client";
import Image from "next/image";
import pawprint from "../../public/assets/paw-print.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutSection = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen ">
            <Image
                src={pawprint}
                alt="pawprint"
                className=" opacity-20 w-fit"
                width={800}
                height={800}
            />

            <div className="absolute items-center w-full md:space-x-28 md:flex">
                <div className="space-y-4 md:w-1/2 md:space-y-6">
                    <h1 className="text-4xl font-semibold md:text-6xl">
                        Sobre FindPet
                    </h1>
                    <div className="space-y-6">
                        <p className="font-medium text-justify md:text-2xl">
                            Bem-vindo ao FindPet, sua plataforma dedicada a unir
                            animais perdidos e aqueles que buscam um lar
                            amoroso.
                        </p>
                        <p className="font-medium text-justify md:text-2xl">
                            Nosso objetivo é criar uma comunidade de apoio, onde
                            cada animal possa ter a chance de encontrar o seu
                            lugar ideal e cada dono possa reencontrar seu amigo
                            de quatro patas.
                        </p>
                    </div>
                </div>

                <DotLottieReact
                    src="https://lottie.host/6d34525b-d0e7-4858-956d-712a04d6ad32/ldGGYnSUB9.lottie"
                    loop
                    autoplay
                    className="hidden  w-[70%] md:flex"
                />
            </div>
        </section>
    );
};

export default AboutSection;
