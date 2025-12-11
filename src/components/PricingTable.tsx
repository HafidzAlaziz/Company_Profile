"use client";

import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const packages = [
    {
        name: "Basic Wedding",
        price: "3.500.000",
        features: [
            "1 Photographer",
            "8 Hours Coverage",
            "Unlimited Photos (Edited)",
            "Flashdisk 16GB",
            "Modern Album 20x30cm"
        ]
    },
    {
        name: "Premium Wedding",
        price: "7.500.000",
        popular: true,
        features: [
            "2 Photographers",
            "1 Videographer",
            "Full Day Coverage",
            "Cinematic Video 3-5 Mins",
            "Unlimited Photos (Edited)",
            "2x Modern Album 20x30cm",
            "Canvas 40x60cm + Frame"
        ]
    },
    {
        name: "Luxury Wedding",
        price: "15.000.000",
        features: [
            "3 Photographers",
            "2 Videographers",
            "Drone Coverage",
            "Same Day Edit Video",
            "Exclusive Box Album",
            "2x Canvas 60x90cm + Frame",
            "All Raw Files"
        ]
    }
];

const PricingTable = () => {
    const [region, setRegion] = useState<"jabodetabek" | "outer">("jabodetabek");

    return (
        <div className="w-full">
            {/* Region Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-secondary-light p-1 rounded-full flex relative">
                    <motion.div
                        className="absolute top-1 bottom-1 bg-primary rounded-full z-0"
                        initial={false}
                        animate={{
                            left: region === "jabodetabek" ? "4px" : "50%",
                            width: "calc(50% - 4px)",
                            x: region === "jabodetabek" ? 0 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <button
                        onClick={() => setRegion("jabodetabek")}
                        className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors ${region === "jabodetabek" ? "text-black" : "text-gray-400"}`}
                    >
                        Jabodetabek
                    </button>
                    <button
                        onClick={() => setRegion("outer")}
                        className={`relative z-10 px-8 py-2 rounded-full text-sm font-medium transition-colors ${region === "outer" ? "text-black" : "text-gray-400"}`}
                    >
                        Luar Jabodetabek
                    </button>
                </div>
            </div>

            {region === "outer" && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8 bg-primary/10 border border-primary/20 p-4 rounded-lg max-w-2xl mx-auto"
                >
                    <p className="text-primary text-sm">
                        <strong>Catatan:</strong> Harga di bawah adalah harga dasar. Untuk luar Jabodetabek, akan ada penyesuaian biaya transportasi dan akomodasi sesuai lokasi acara.
                    </p>
                </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <div
                        key={index}
                        className={`relative bg-secondary-light border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col ${pkg.popular ? 'border-primary shadow-2xl shadow-primary/10 transform md:-translate-y-4' : 'border-white/5'}`}
                    >
                        {pkg.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-sm text-gray-400">Rp</span>
                            <span className="text-4xl font-serif font-bold text-primary">{pkg.price}</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button variant={pkg.popular ? 'primary' : 'outline'} className="w-full">
                                Pilih Paket
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
