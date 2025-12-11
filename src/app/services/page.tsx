import { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Layanan Fotografi & Videografi | Aura Visuals",
    description: "Paket lengkap layanan fotografi wedding, prewedding, event, dan corporate dengan hasil profesional dan artistik.",
};


export default function ServicesPage() {
    const services = [
        {
            title: "Wedding Photography",
            desc: "Paket lengkap dokumentasi hari bahagia Anda, mulai dari akad/pemberkatan hingga resepsi.",
            price: "Rp 3.500.000",
            img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Prewedding Session",
            desc: "Sesi foto outdoor atau indoor dengan konsep yang disesuaikan dengan karakter pasangan.",
            price: "Rp 1.500.000",
            img: "https://images.unsplash.com/photo-1583934555026-6d60ea106206?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Cinematic Videography",
            desc: "Film pendek pernikahan Anda dengan color grading cinematic dan editing storytelling.",
            price: "Rp 4.000.000",
            img: "https://images.unsplash.com/photo-1621253907409-f831349bcd58?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Family Portrait",
            desc: "Abadikan kehangatan keluarga di studio kami atau lokasi pilihan Anda.",
            price: "Rp 1.000.000",
            img: "https://images.unsplash.com/photo-1623945241470-4d576a8b79ad?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Corporate & Event",
            desc: "Dokumentasi profesional untuk kebutuhan branding perusahaan dan event kantor.",
            price: "Rp 2.500.000",
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Product Photography",
            desc: "Foto produk katalog atau editorial untuk meningkatkan penjualan bisnis Anda.",
            price: "Rp 500.000/sku",
            img: "https://images.unsplash.com/photo-1505740420928-5e57ef893c13?q=80&w=1770&auto=format&fit=crop"
        },
    ];

    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Layanan Kami</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Pilihan paket komprehensif untuk setiap kebutuhan visual Anda.
                </p>
            </section>

            <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {services.map((s, i) => (
                    <ServiceCard
                        key={i}
                        title={s.title}
                        description={s.desc}
                        priceStart={s.price}
                        image={s.img}
                    />
                ))}
            </section>

            <section className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-black mb-8">Butuh Paket Custom?</h2>
                    <Link href="/contact">
                        <Button variant="white">Konsultasi Gratis</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
