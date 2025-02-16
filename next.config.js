const createNextIntlPlugin = require("next-intl/plugin")
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const rebuild = 0.03

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
      },
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
      {
        protocol: "https",
        hostname: "graceful-hope-03323ffb1e.media.strapiapp.com",
        port: "",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    })
    config.resolve.fallback = { fs: false, net: false, tls: false }
    config.externals.push("pino-pretty", "lokijs", "encoding")
    return config
  },
  async headers() {
    return [
      {
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
  async rewrites() {
    return [
      ...["en", "de", "es", "it", "gr", "tr"].map((lang) => ({
        source: `/${lang}/legal/general-terms-and-conditions`,
        destination: "/legal-files/general_terms_and_conditions_en.pdf",
      })),
      ...["en", "de", "es", "it", "gr", "tr"].map((lang) => ({
        source: `/${lang}/legal/eezy-trader/terms-and-conditions`,
        destination: "/legal-files/eezy_trader_terms_and_conditions_en.pdf",
      })),
      ...["en", "de", "es", "it", "gr", "tr"].map((lang) => ({
        source: `/${lang}/legal/spot-market-terms`,
        destination: "/legal-files/spot_market_terms_en.pdf",
      })),
      ...["en", "de", "es", "it", "gr", "tr"].map((lang) => ({
        source: `/${lang}/legal/btc-saving-plan-terms`,
        destination: "/legal-files/btc_saving_plan_terms_en.pdf",
      })),
      ...["en", "de", "es", "it", "gr", "tr"].map((lang) => ({
        source: `/${lang}/legal/gara-stake-terms`,
        destination: "/legal-files/gara_stake_terms_en.pdf",
      })),
      {
        source: "/cs/legal/gara-stake-terms",
        destination: "/legal-files/gara_stake_terms_cz.pdf",
      },
      {
        source: "/cs/legal/general-terms-and-conditions",
        destination: "/legal-files/general_terms_and_conditions_cz.pdf",
      },
      {
        source: "/cs/legal/eezy-trader/terms-and-conditions",
        destination: "/legal-files/eezy_trader_terms_and_conditions_cz.pdf",
      },
      {
        source: "/cs/legal/spot-market-terms",
        destination: "/legal-files/spot_market_terms_cz.pdf",
      },
      {
        source: `/cs/legal/btc-saving-plan-terms`,
        destination: "/legal-files/btc_saving_plan_terms_cz.pdf",
      },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
