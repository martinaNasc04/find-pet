"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { PawPrint } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
    const { isSignedIn, isLoaded } = useUser();

    return (
        <nav
            className="flex items-center justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-2 md:py-3 px-10
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg mb-10"
        >
            <a href="#" className="flex items-center justify-center gap-2">
                <h1 className="text-2xl">FindPet</h1>
                <PawPrint className="w-8 h-8" />
            </a>

            {!isLoaded ? (
                <div />
            ) : isSignedIn ? (
                <UserButton />
            ) : (
                <Link href="/login">
                    <Button>Entrar</Button>
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
