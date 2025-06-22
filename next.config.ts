import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.geeksforgeeks.org',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  
};

export default nextConfig;
