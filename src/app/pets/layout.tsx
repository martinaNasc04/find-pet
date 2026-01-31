"use client";
import Navbar from "@/components/Navbar";
import { SignedIn } from "@clerk/nextjs";
import { useState } from "react";

export default function PetLayout({ children }: { children: React.ReactNode }) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <section>
            {/* Se o usuário estiver logado */}
            <SignedIn>
                <Navbar menuOpen={openMenu} setMenuOpen={setOpenMenu} />
            </SignedIn>
            {children}
        </section>
    );
}
