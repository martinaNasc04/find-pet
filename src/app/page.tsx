'use client'
import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="mx-8">

      </div>
    </div>
  );
}
