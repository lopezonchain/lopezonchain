/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withTM = require('next-transpile-modules')(['@farcaster/frame-sdk']);

module.exports = withTM(nextConfig);