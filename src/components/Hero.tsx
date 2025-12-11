"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { IMAGES } from "@/lib/images";

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("${IMAGES.hero.bg}")`,
                        filter: 'brightness(0.4)'
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
                        Professional Photography Services
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                        Capturing Moments<br /> Creating Memories
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Kami mengabadikan setiap detik berharga Anda dengan sentuhan artistik dan profesionalisme tinggi.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center pt-8"
                >
                    <Link href="/contact">
                        <Button variant="primary" className="w-full md:w-auto">Booking Sekarang</Button>
                    </Link>
                    <Link href="/portfolio">
                        <Button variant="outline" className="w-full md:w-auto">Lihat Portfolio</Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce"
            >
                <ChevronDown className="text-white/50 w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
