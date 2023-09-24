/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.procoding.org",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
