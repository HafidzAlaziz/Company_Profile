import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioGallery from "@/components/PortfolioGallery";
import Testimonials from "@/components/Testimonials";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { IMAGES } from "@/lib/images";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">

            <Hero />

            {/* About Section */}
            <section className="py-24 bg-secondary-dark relative">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-primary tracking-widest uppercase text-sm font-semibold">Tentang Kami</h2>
                        <h3 className="text-4xl font-serif font-bold text-white leading-tight">Menciptakan Karya Visual yang Abadi</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Aura Visuals adalah penyedia layanan fotografi dan videografi profesional yang berbasis di Jakarta.
                            Kami percaya bahwa setiap momen memiliki ceritanya sendiri, dan tugas kami adalah menceritakannya kembali melalui
                            lensa yang artistik.
                        </p>
                        <ul className="space-y-3 pt-4">
                            {['Tim Berpengalaman 5+ Tahun', 'Peralatan High-End Professional', 'Editing Cinematic & Detail'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <Link href="/about">
                                <Button variant="outline">Pelajari Lebih Lanjut</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url("${IMAGES.about.bg}")` }}
                        />
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-secondary">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-primary tracking-widest uppercase text-sm font-semibold mb-3">Layanan Kami</h2>
                        <h3 className="text-4xl font-serif font-bold text-white">Solusi Visual Terlengkap</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Wedding Photography"
                            description="Abadikan momen sakral pernikahan Anda dengan sentuhan estetik dan emosional."
                            priceStart="Rp 3.000.000"
                            image={IMAGES.services.wedding}
                        />
                        <ServiceCard
                            title="Prewedding Session"
                            description="Konsep unik dan personal untuk menceritakan kisah cinta Anda sebelum hari H."
                            priceStart="Rp 1.500.000"
                            image={IMAGES.services.prewedding}
                        />
                        <ServiceCard
                            title="Corporate Event"
                            description="Dokumentasi profesional untuk acara perusahaan, seminar, dan gathering."
                            priceStart="Rp 2.500.000"
                            image={IMAGES.services.corporate}
                        />
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/services">
                            <Button variant="white" className="gap-2 inline-flex items-center">
                                Lihat Semua Layanan <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Portfolio Highlight */}
            <section className="py-24 bg-secondary-dark">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-primary tracking-widest uppercase text-sm font-semibold mb-3">Portfolio</h2>
                            <h3 className="text-4xl font-serif font-bold text-white">Karya Terbaru</h3>
                        </div>
                        <Link href="/portfolio" className="hidden md:block text-gray-400 hover:text-white transition-colors">
                            Lihat Gallery Lengkap &rarr;
                        </Link>
                    </div>
                    <PortfolioGallery />
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-primary tracking-widest uppercase text-sm font-semibold mb-12">Testimonial</h2>
                    <Testimonials />
                </div>
            </section>

            {/* CTA / Booking Teaser */}
            <section className="py-32 relative bg-primary overflow-hidden">
                <div className="absolute inset-0 bg-black/80 z-0" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay z-0"
                    style={{ backgroundImage: `url("${IMAGES.cta.bg}")` }}
                />
                <div className="container relative z-10 mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Siap Mengabadikan Momen Anda?</h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Konsultasikan kebutuhan dokumentasi Anda sekarang dan dapatkan penawaran spesial.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-white text-black hover:bg-primary-100 hover:text-black hover:scale-105 border-0">
                            Hubungi Kami Sekarang
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    );
}
