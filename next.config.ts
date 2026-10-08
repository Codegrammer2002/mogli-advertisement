import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Evaluated once per build; pages are rebuilt on every deploy, so the
    // "current year" shown on the site tracks the latest deployment.
    BUILD_YEAR: String(new Date().getFullYear()),
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
