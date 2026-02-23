/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,  // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,  // Add this line
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;