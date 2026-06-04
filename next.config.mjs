/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the lines below to enable static export for Vercel/CDN deployment
  // output: "export",
  // trailingSlash: true,
  images: {
    unoptimized: false, // set to true if using static export
  },
};

export default nextConfig;
