/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/astrosite',  // Replace with your GitHub repository name
  images: {
    domains: ['cloud.appwrite.io'], // Allow loading images from Appwrite
  },
  trailingSlash: true, // Ensures correct path handling for routing
}

module.exports = nextConfig
