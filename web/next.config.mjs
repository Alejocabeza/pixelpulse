/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/guide/introduction",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/guide/introduction",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/guide/introduction",
        permanent: true,
      },
      {
        source: "/components",
        destination: "/components/avatar",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
