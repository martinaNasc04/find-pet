import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import HeroSection from "@/components/sections/Hero";
import PetsSection from "@/components/sections/Pets";

export default function Home() {
    return (
        <div className="min-h-screen mx-8">
            <HeroSection />
            <AboutSection />
            <PetsSection />
            <ContactSection />
        </div>
    );
}
