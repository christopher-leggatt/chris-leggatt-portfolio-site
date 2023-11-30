/** @type {import('next').NextConfig} */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.loom.com",
      },
    ],
  },
  serverActions: true,
  serverComponentsExternalPackages: ["mongoose", "@typegoose/typegoose"],
  // Debug
  // metadata: {
  //   metadataBase: baseUrl,
  // },
};

module.exports = nextConfig;
