/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  basePath: '/absproxy/3000', // REMOVER ANTES DE PRODUÇÃO
  assetPrefix: '/absproxy/3000', // REMOVER ANTES DE PRODUÇÃO
}

export default nextConfig
