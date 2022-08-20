/** @type {import('next').NextConfig} */
const nextConfig = {
  typeScript:{
    ignoreBuildErrors:true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['cdn.pixabay.com','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
