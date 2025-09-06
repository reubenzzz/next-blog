/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['res.cloudinary.com', 'images.unsplash.com'] } // add domains you use
}

module.exports = nextConfig
