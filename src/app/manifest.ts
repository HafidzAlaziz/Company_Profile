import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Aura Visuals Photography',
        short_name: 'Aura Visuals',
        description: 'Professional Photography Services in Jakarta',
        start_url: '/',
        display: 'standalone',
        background_color: '#0F0F0F',
        theme_color: '#D4AF37',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
