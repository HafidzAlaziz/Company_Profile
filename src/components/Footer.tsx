import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Camera } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Camera className="w-10 h-10 text-primary" />
                            <h3 className="text-2xl font-serif font-bold text-primary">AURA VISUALS</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Mengabadikan momen berharga Anda dengan sentuhan artistik dan profesional. Setiap detik berarti sebuah cerita.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-wider">Layanan</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Wedding Photography</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Prewedding Session</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Cinematic Video</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Event Documentation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold tracking-wider">Hubungi Kami</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>Jakarta Selatan, Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>contact@auravisuals.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Instagram className="w-5 h-5 text-primary" />
                                <span>@auravisuals_id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aura Visuals. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
