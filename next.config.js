const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [""],
  },
  redirects() {
    try {
      return get("redirects")
    } catch {
      return []
    }
  },
  // headers() {
  //     return [
  //         {
  //             source: '/(.*)',
  //             headers: securityHeaders,
  //         },
  //     ];
  // },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.v3digital.studio",
          }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
    // into React components. See https://react-svgr.com/docs/next/

    // Grab the existing rule that handles SVG imports
    // @ts-ignore - this is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

// https://nextjs.org/docs/advanced-features/security-headers
// const ContentSecurityPolicy = `
//     default-src 'self' vercel.live;
//     script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
//     style-src 'self' 'unsafe-inline';
//     img-src * blob: data:;
//     media-src 'none';
//     connect-src *;
//     font-src 'self';
// `;

// const securityHeaders = [
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
//     {
//         key: 'Content-Security-Policy',
//         value: ContentSecurityPolicy.replace(/\n/g, ''),
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
//     {
//         key: 'Referrer-Policy',
//         value: 'origin-when-cross-origin',
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
//     {
//         key: 'X-Frame-Options',
//         value: 'DENY',
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
//     {
//         key: 'X-Content-Type-Options',
//         value: 'nosniff',
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
//     {
//         key: 'X-DNS-Prefetch-Control',
//         value: 'on',
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
//     {
//         key: 'Strict-Transport-Security',
//         value: 'max-age=31536000; includeSubDomains; preload',
//     },
//     https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
//     {
//         key: 'Permissions-Policy',
//         value: 'camera=(), microphone=(), geolocation=()',
//     },
// ];

module.exports = withContentlayer(nextConfig)
