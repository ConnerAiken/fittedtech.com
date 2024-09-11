/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/social",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;

