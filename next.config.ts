import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // basePath: isProd ? "/" : "", // TODO: this should follow the domain
  // assetPrefix: isProd ? "/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
