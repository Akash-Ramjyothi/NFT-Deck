/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable static export (good for hosting on CDN / static hosting)
  output: "export",

  experimental: {
    appDir: true
  },

  // Optimize images for static export
  images: {
    unoptimized: true
  },

  // Optional: Add basePath if deploying under subpath
  // basePath: "/nft-deck",

  // Optional: Enable SWC minification
  swcMinify: true,

  // Environment variables (example)
  env: {
    APP_NAME: "NFT Deck"
  },

  // Webpack customization (if needed)
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;
