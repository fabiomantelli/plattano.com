import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['plattano.com'], // adicione outros domínios se necessário
  },
  output: 'standalone', // útil para builds no Vercel ou Docker
}

export default nextConfig
