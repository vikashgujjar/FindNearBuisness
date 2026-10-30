/** @type {import('next').NextConfig} */
const nextConfig = {
    // No `output: 'export'`: city/category URLs come from the visitor's
    // location (e.g. /Barara/hotel/), so they can't all be pre-generated.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
