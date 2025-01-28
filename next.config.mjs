/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Отключить Image Optimization API
  },
};

export default nextConfig;
