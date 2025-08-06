import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plattano.com',
      },
      // adicione mais domínios aqui se necessário
    ],
  },
  output: 'standalone',

  // ✅ Redirecionar www → sem www (canonical domain fix)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.plattano.com',
          },
        ],
        destination: 'https://plattano.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
