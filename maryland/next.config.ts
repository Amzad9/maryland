import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com'
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com'
      },
      {
        protocol:'https',
        hostname: 'cdn.ezo.io'
      }

    ],
  },
};

export default nextConfig;
