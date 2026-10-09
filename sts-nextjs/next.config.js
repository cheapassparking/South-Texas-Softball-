/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/links",
        destination: "/qr",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
