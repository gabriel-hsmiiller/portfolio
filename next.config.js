/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_API_KEY: process.env.SUPABASE_API_KEY
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    ignoreDuringBuilds: true,
}

module.exports = nextConfig;