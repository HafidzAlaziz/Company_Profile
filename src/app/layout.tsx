import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Using classic elegant fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Aura Visuals | Professional Photography Services",
    description: "Capturing your precious moments with professional touch. Wedding, Event, and Corporate Photography.",
    openGraph: {
        title: "Aura Visuals | Professional Photography",
        description: "Capturing your precious moments with professional touch.",
        url: "https://auravisuals.com",
        siteName: "Aura Visuals",
        locale: "id_ID",
        type: "website",
    },
    icons: {
        icon: '/images/camera-logo.png',
        shortcut: '/images/camera-logo.png',
        apple: '/images/camera-logo.png',
    },
};

export const viewport: Viewport = {
    themeColor: '#D4AF37',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="id" className="scroll-smooth">
            <body className={`${inter.variable} ${playfair.variable} font-sans bg-secondary-dark text-white antialiased`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
