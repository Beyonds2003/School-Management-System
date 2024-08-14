/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["image.petmd.com", "wallpapers.com", "hbtu.edu.mm"],
  },
};

module.exports = nextConfig;
