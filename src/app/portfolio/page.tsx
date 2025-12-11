import PortfolioGallery from "@/components/PortfolioGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Kami | Aura Visuals",
    description: "Lihat koleksi hasil karya foto dan video terbaik dari Aura Visuals: Wedding, Prewedding, dan Event.",
};


export default function PortfolioPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Portfolio</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Kumpulan karya terbaik kami. Biarkan foto berbicara.
                </p>
            </section>

            <section className="container mx-auto px-6">
                <PortfolioGallery />
            </section>
        </div>
    );
}
