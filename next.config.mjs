import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  },
  async headers() {
    return [
      {
        // Aplica estos headers a todas las rutas de la aplicación
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // O especifica el origen que necesites
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,PUT,DELETE,OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With,Content-Type,Accept,Authorization',
          },
        ],
      },
    ];
  },
};

export default withTM(['@farcaster/frame-sdk'])(nextConfig);
