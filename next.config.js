/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // Settings to deploy in shared-hosting server
  images: { unoptimized: true },
}

module.exports = nextConfig
