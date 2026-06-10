import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    articles: {
      stale: 3600,        // serve from cache for 1 hour without revalidating
      revalidate: 86400,  // revalidate in the background after 24 hours
      expire: 604800,     // force fresh fetch after 1 week
    },
  },
};

export default nextConfig;
