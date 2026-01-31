import Navbar from "@/components/Navbar";
import { SignedIn } from "@clerk/nextjs";

export default function PetLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            {/* Se o usuário estiver logado */}
            <SignedIn>
                <Navbar />
            </SignedIn>
            {children}
        </section>
    );
}
