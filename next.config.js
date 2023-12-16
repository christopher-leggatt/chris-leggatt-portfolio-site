/** @type {import('next').NextConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
  images: {    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.loom.com",
      },
      {
        protocol: "https",
        hostname: "iad.microlink.io", // link preview

      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  },
};

module.exports = nextConfig;
