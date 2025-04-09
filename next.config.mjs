import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  },
};

export default withTM(['@farcaster/frame-sdk'])(nextConfig);
