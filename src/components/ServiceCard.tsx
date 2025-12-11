import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
    title: string;
    description: string;
    priceStart?: string;
    image: string;
}

const ServiceCard = ({ title, description, priceStart, image }: ServiceProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-secondary-light border border-white/5 hover:border-primary/50 transition-all duration-500">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Content */}
            <div className="p-6 relative">
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                    {priceStart && (
                        <span className="text-primary font-medium">Mulai {priceStart}</span>
                    )}
                    <Link href="/services" className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                        Detail <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
