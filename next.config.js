/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coinicons-api.vercel.app",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
