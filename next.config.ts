import path from "path";

const nextConfig = {
  output: "standalone" as const,
  outputFileTracingRoot: path.join(__dirname, "./"),
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
