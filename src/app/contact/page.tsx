import BookingForm from "@/components/BookingForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hubungi Kami | Aura Visuals",
    description: "Konsultasikan kebutuhan fotografi Anda. Hubungi kami via WhatsApp atau email untuk penawaran spesial.",
};


export default function ContactPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Hubungi Kami</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Siap mewujudkan visual impian Anda? Isi form di bawah atau hubungi kami langsung.
                </p>
            </section>

            <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Informasi Kontak</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-full text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">WhatsApp / Telepon</h4>
                                    <p className="text-gray-400">+62 812-3456-7890</p>
                                    <p className="text-sm text-gray-500">Senin - Minggu (09:00 - 21:00)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-full text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Email</h4>
                                    <p className="text-gray-400">hello@auravisuals.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-full text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Studio</h4>
                                    <p className="text-gray-400">Jl. Fotografi No. 12, Kemang,<br />Jakarta Selatan, 12730</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-secondary-light p-8 rounded-2xl border border-white/5">
                        <h4 className="text-xl font-bold text-white mb-4">FAQ Singkat</h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p><strong>Q: Apakah bisa meeting tatap muka?</strong><br />A: Tentu, silahkan buat janji temu lewat WhatsApp.</p>
                            <p><strong>Q: Apakah file mentah diberikan?</strong><br />A: File mentah (RAW) hanya diberikan pada paket-paket tertentu.</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <BookingForm />
                </div>
            </section>
        </div>
    );
}
