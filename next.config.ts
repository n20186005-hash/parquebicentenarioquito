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
    }];
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
