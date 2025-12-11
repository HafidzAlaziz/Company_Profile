import PricingTable from "@/components/PricingTable";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar Harga & Paket | Aura Visuals",
    description: "Pilihan paket fotografi dan videografi wedding, prewedding, dan event dengan harga transparan.",
};



export default function PricingPage() {
    return (
        <div className="pt-24 pb-24">
            <section className="container mx-auto px-6 mb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Paket & Harga</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Investasi terbaik untuk kenangan yang tak ternilai harganya. Transparan, tanpa hidden cost.
                </p>
            </section>

            <section className="container mx-auto px-6 mb-24">
                <PricingTable />
            </section>

            <section className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-6">
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Apa saja yang termasuk dalam paket?</h3>
                        <p className="text-gray-400">Setiap paket standar sudah termasuk jasa fotografer, editing (color grading), dan softcopy high-res. Untuk paket wedding, biasanya termasuk album cetak.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Berapa lama proses editing?</h3>
                        <p className="text-gray-400">Untuk foto teaser H+1. Semua foto diedit maksimal 14 hari kerja setelah acara. Video cinematic 30 hari kerja.</p>
                    </div>
                    <div className="border-b border-white/10 pb-6">
                        <h3 className="text-lg font-bold text-white mb-2">Bagaimana sistem pembayarannya?</h3>
                        <p className="text-gray-400">DP 30% untuk booking tanggal (non-refundable). Pelunasan H-7 acara.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
