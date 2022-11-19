/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
