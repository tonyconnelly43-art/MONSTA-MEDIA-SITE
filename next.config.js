/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old Wix URL structure -> clean Next.js routes (preserves SEO link equity)
      { source: '/services-2', destination: '/services', permanent: true },
      { source: '/blog-1', destination: '/blog', permanent: true },
      { source: '/post/:slug*', destination: '/blog', permanent: true },
      { source: '/contact-us', destination: '/#free-brand-review', permanent: true },
    ];
  },
};

module.exports = nextConfig;
