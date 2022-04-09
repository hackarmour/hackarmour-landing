/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/public/policy.html",
      destination: "/pages/api/policy.js",
    },
  ],
}
