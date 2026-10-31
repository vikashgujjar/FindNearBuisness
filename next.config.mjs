/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // `output: 'export'`: city/category URLs come from the visitor's
    // location (e.g. /Barara/hotel/), so they can't all be pre-generated.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
