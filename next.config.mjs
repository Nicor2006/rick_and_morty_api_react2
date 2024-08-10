/** @type {import('next').NextConfig} */
   // next.config.mjs
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
