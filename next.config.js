/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, 
      module: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    }
    return config;
  },
}

module.exports = nextConfig
