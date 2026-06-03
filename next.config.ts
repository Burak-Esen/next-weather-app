import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ! Not stable - has memory leak with next@16.2.6 - babel-plugin-react-compiler
  // reactCompiler: true,
  // experimental: {
  //   turbopackFileSystemCacheForDev: true
  // }
};

export default nextConfig;
