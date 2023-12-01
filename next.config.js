/** @type {import('next').NextConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
  images: {
    domains: [
      "iad.microlink.io", // link preview
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.loom.com",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  },
};

module.exports = nextConfig;
