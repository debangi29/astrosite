/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: '/astrosite', // Replace 'astrosite' with your GitHub repo name
  trailingSlash: true, // Ensures proper routing
  images: {
    unoptimized: true, // Fix issues with Next.js image optimization on static export
  },
};

module.exports = nextConfig;
