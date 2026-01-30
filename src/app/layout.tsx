import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "FindPet",
    description: "Encontre seu melhor amigo ou adote um animalzinho",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider localization={ptBR}>
            <html lang="en">
                <body className={` ${montserrat.variable} antialiased`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
