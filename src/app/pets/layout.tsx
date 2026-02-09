import Navbar from "@/components/Navbar";

export default function PetLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Navbar />

            {children}
        </section>
    );
}
