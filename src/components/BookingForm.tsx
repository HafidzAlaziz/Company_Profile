"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";

type FormData = {
    name: string;
    whatsapp: string;
    date: string;
    locationType: "jabodetabek" | "luar-jabodetabek";
    packageType: string;
    notes: string;
};

const BookingForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const locationType = watch("locationType");

    const onSubmit = (data: FormData) => {
        // Construct WhatsApp Message
        const text = `Halo Admin Aura Visuals,%0A%0ASaya ingin booking:%0ANama: ${data.name}%0AWA: ${data.whatsapp}%0ATanggal: ${data.date}%0ALokasi: ${data.locationType === 'jabodetabek' ? 'Jabodetabek' : 'Luar Jabodetabek'}%0APaket: ${data.packageType}%0ACatatan: ${data.notes}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
        setIsSubmitted(true);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-secondary-light p-8 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="text-3xl font-serif font-bold text-center text-white mb-2">Mulai Project Anda</h3>
            <p className="text-gray-400 text-center mb-8">Isi form berikut untuk konsultasi dan pemesanan.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Nama Lengkap</label>
                    <input
                        {...register("name", { required: true })}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">Wajib diisi</span>}
                </div>

                {/* Whatsapp */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Nomor WhatsApp</label>
                    <input
                        {...register("whatsapp", { required: true })}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                        placeholder="0812..."
                        type="tel"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Tanggal Acara</label>
                    <input
                        {...register("date", { required: true })}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                        type="date"
                    />
                </div>

                {/* Location Dropdown */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Lokasi Acara</label>
                    <select
                        {...register("locationType", { required: true })}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    >
                        <option value="jabodetabek">Jabodetabek</option>
                        <option value="luar-jabodetabek">Luar Jabodetabek</option>
                    </select>
                </div>

                {/* Dynamic Notification */}
                <AnimatePresence>
                    {locationType === "luar-jabodetabek" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-lg flex gap-3 text-sm items-start"
                        >
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p>
                                <strong>Catatan Luar Kota:</strong> Harga akan disesuaikan dengan biaya transportasi & akomodasi tim.
                                Admin kami akan menghubungi Anda untuk rincian biaya tambahan.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Package Type */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Pilih Layanan</label>
                    <select
                        {...register("packageType", { required: true })}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                    >
                        <option value="Wedding Basic">Wedding Photography - Basic</option>
                        <option value="Wedding Premium">Wedding Photography - Premium</option>
                        <option value="Prewedding">Prewedding Session</option>
                        <option value="Event">Event Documentation</option>
                        <option value="Product">Product Photography</option>
                        <option value="Other">Lainnya</option>
                    </select>
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm text-gray-400 mb-2">Catatan Tambahan (Opsional)</label>
                    <textarea
                        {...register("notes")}
                        className="w-full bg-secondary-dark border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors h-32"
                        placeholder="Ceritakan detail acara atau request khusus Anda..."
                    />
                </div>

                <Button type="submit" className="w-full py-4 text-lg">
                    Kirim via WhatsApp
                </Button>

            </form>
        </div>
    );
};

export default BookingForm;
