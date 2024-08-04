/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["image.petmd.com", "wallpapers.com"],
  },
};

module.exports = nextConfig;
