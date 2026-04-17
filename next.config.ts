import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Note: rewrites are not supported with 'output: export'
  // and will be ignored in the build.
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL || "http://localhost:8000";
    
    if (!process.env.BACKEND_URL) {
      console.warn("⚠️ BACKEND_URL is not defined. Defaulting to http://localhost:8000 for rewrites.");
    }

    return [
      {
        source: "/v1/:path*",
        destination: `${backendUrl}/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
