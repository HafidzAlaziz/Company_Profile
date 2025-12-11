import Button from "@/components/ui/Button";
import Link from "next/link";
import { Camera, Heart, Users, Video } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami | Aura Visuals",
    description: "Kenali tim Aura Visuals, fotografer profesional yang berdedikasi mengabadikan momen berharga Anda.",
};


import { IMAGES } from "@/lib/images";

export default function AboutPage() {
    return (
        <div className="pt-24 pb-24">
            {/* Header */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Tentang Aura Visuals</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Lebih dari sekadar fotografer, kami adalah pencerita kisah visual Anda.
                </p>
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="grid grid-cols-2 gap-4">
                        <img src={IMAGES.about.studio} className="rounded-2xl w-full h-64 object-cover mt-8" alt="Studio" />
                        <img src={IMAGES.about.team} className="rounded-2xl w-full h-64 object-cover" alt="Working" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-primary">Visi & Misi Kami</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Berdiri sejak 2018, Aura Visuals memulai perjalanan dengan satu kamera dan mimpi besar: mengubah momen sesaat menjadi kenangan abadi.
                            Kami percaya fotografi bukan hanya soal teknis, tapi soal rasa dan emosi.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Misi kami adalah memberikan pengalaman dokumentasi yang effortless, menyenangkan, dan tentu saja, menghasilkan karya seni yang bisa Anda banggakan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats / Features */}
            <section className="bg-secondary mb-24 py-16">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <Users className="w-10 h-10 text-primary mx-auto" />
                        <h4 className="text-3xl font-bold text-white">5+</h4>
                        <p className="text-gray-400 text-sm">Tahun Pengalaman</p>
                    </div>
                    <div className="space-y-2">
                        <Heart className="w-10 h-10 text-primary mx-auto" />
                        <h4 className="text-3xl font-bold text-white">500+</h4>
                        <p className="text-gray-400 text-sm">Happy Couples</p>
                    </div>
                    <div className="space-y-2">
                        <Camera className="w-10 h-10 text-primary mx-auto" />
                        <h4 className="text-3xl font-bold text-white">10k+</h4>
                        <p className="text-gray-400 text-sm">Photos Captured</p>
                    </div>
                    <div className="space-y-2">
                        <Video className="w-10 h-10 text-primary mx-auto" />
                        <h4 className="text-3xl font-bold text-white">100%</h4>
                        <p className="text-gray-400 text-sm">Professional Editing</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-8">Ingin Mengenal Kami Lebih Dekat?</h2>
                <Link href="/contact">
                    <Button>Hubungi Kami</Button>
                </Link>
            </section>
        </div>
    );
}
