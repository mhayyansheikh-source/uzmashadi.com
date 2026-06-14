import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'uzmashadi.com | Matchmaker in Multan',
    short_name: 'uzmashadi.com',
    description: 'The premier matchmaking service for Multan, Pakistan. Find genuine, verified rishtas today.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0d4a38',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
