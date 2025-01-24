/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Отключить Image Optimization API
  },
};

export default nextConfig;
