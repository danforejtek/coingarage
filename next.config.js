/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")()

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coinicons-api.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "trade.coingarage.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "via.assets.so",
        port: "",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ name: "removeViewBox", active: false }],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    })
    return config
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://coingarage.io" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
