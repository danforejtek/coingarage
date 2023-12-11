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
}

module.exports = nextConfig
