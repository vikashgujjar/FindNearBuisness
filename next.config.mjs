/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export only for `next build`. City/category URLs come from the visitor's
    // location (e.g. /Barara/hotel/), so they can't all be pre-generated: on the live server
    // public/.htaccess sends unknown cities to the /default-location/... pages. `next dev`
    // has no .htaccess, so in development pages are rendered on demand for any city instead.
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
