"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { PawPrint } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const { isSignedIn, isLoaded } = useUser();

    return (
        <nav
            className="flex items-center justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-2 md:py-3 px-10
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg mb-10"
        >
            <Link href="/" className="flex items-center justify-center gap-2">
                <h1 className="text-2xl">FindPet</h1>
                <PawPrint className="w-8 h-8" />
            </Link>

            {!isLoaded ? (
                <div />
            ) : isSignedIn ? (
                <div>
                    <div className="hidden gap-6 md:flex">
                        <Button className="px-3 py-2 font-semibold text-white transition-all border-2 rounded-lg cursor-pointer bg-cyan-500 border-cyan-300 md:px-6 hover:bg-white hover:text-cyan-500">
                            <Link href="/user">Seu perfil</Link>
                        </Button>
                        <Button className="px-3 py-2 font-semibold text-white transition-all bg-pink-500 border-2 border-pink-300 rounded-lg cursor-pointer md:px-6 hover:bg-white hover:text-pink-500">
                            <Link href="/pets">Pets</Link>
                        </Button>
                        <Button className="px-3 py-2 font-semibold text-white transition-all bg-orange-500 border-2 border-orange-300 rounded-lg cursor-pointer md:px-6 hover:bg-white hover:text-orange-500">
                            <Link href="/pets/new">Anunciar um pet</Link>
                        </Button>
                        <Button className="px-3 py-2 font-semibold text-white transition-all border-2 rounded-lg cursor-pointer mb:px-6 bg-violet-500 hover:bg-white hover:text-violet-500 border-violet-300">
                            <Link href="/pets/view-pets">
                                Visualizar pets postados
                            </Link>
                        </Button>
                        <UserButton />
                    </div>
                    <MobileMenu />
                </div>
            ) : (
                <Link href="/login">
                    <Button>Entrar</Button>
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
