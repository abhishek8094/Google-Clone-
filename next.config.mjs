/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikipedia.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
