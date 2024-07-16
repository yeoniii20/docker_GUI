/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `http://localhost:2375/:path*`,
      },
    ];
  },
};

export default nextConfig;
