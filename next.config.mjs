const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "") : "";

const nextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
