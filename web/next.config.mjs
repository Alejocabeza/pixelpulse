/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/guides/introduction',
        permanent: true
      },
      {
        source: '/home',
        destination: '/guides/introduction',
        permanent: true
      },
      {
        source: '/docs',
        destination: '/guides/introduction',
        permanent: true
      },
      {
        source: '/components',
        destination: '/components/avatar',
        permanent: true
      }
    ]
  }
}

export default nextConfig
