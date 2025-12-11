"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Wedding", "Prewedding", "Event", "Portrait"];

const portfolioItems = [
    { id: 1, category: "Wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", title: "Sarah & Dimas" },
    { id: 2, category: "Prewedding", image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", title: "Evening Stroll" },
    { id: 3, category: "Prewedding", image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2070&auto=format&fit=crop", title: "Rustic Love" },
    { id: 4, category: "Event", image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2070&auto=format&fit=crop", title: "Company Gathering" },
    { id: 5, category: "Portrait", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", title: "Studio Session" },
    { id: 6, category: "Wedding", image: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?q=80&w=2070&auto=format&fit=crop", title: "The Vow" },
];

const PortfolioGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <div className="w-full">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                            ? "bg-primary text-black"
                            : "bg-secondary-light text-gray-400 hover:bg-white/10"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            key={item.id}
                            className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[3/4]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-primary text-xs uppercase tracking-wider mb-2">{item.category}</span>
                                <h4 className="text-white text-xl font-serif">{item.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default PortfolioGallery;
