import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Family Information Center',
    short_name: 'FIC',
    description: 'Platform Digital Keluarga Besar',
    start_url: '/',
    display: 'standalone', // Ini rahasianya biar ga ada address bar browser!
    background_color: '#f1f5f9',
    theme_color: '#059669',
    icons: [
      {
        src: '/logoFamily.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}