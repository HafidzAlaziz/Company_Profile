"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Putri & Reza",
        role: "Wedding Client",
        text: "Hasil fotonya luar biasa! Tim Aura Visuals sangat profesional dan bisa menangkap momen-momen candid yang kami tidak sadari. Sangat direkomendasikan!",
    },
    {
        id: 2,
        name: "PT. Teknologi Maju",
        role: "Corporate Event",
        text: "Dokumentasi event tahunan kami jadi terlihat sangat cinematic dan premium. Terima kasih Aura Visuals atas kerjasamanya.",
    },
    {
        id: 3,
        name: "Bella S.",
        role: "Personal Portrait",
        text: "Sesi foto yang sangat menyenangkan. Fotografernya ramah dan jago mengarahkan gaya. Hasil editingnya juga tone-nya pas banget.",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-3xl mx-auto text-center px-6">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            <div className="h-48 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <p className="text-xl md:text-2xl font-serif text-gray-200 italic mb-6 leading-relaxed">
                            "{testimonials[index].text}"
                        </p>
                        <div>
                            <h4 className="text-primary font-bold">{testimonials[index].name}</h4>
                            <span className="text-sm text-gray-500">{testimonials[index].role}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-primary' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
