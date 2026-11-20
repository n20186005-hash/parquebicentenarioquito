import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "./"),
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "parquebicentenarioquito\\.com" }],
      destination: "https://www.parquebicentenarioquito.com/:path*",
      permanent: true,
    }, {
      source: "/",
      destination: "/en",
      permanent: false,
    }, ...["privacy", "terms", "cookies"].map((policy) => ({
      source: `/${policy}`,
      destination: `/zh/${policy}`,
      permanent: true,
    }))];
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
