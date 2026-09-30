/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 2026-09-30: the detailed record moved to /notebook and the front pages became short summaries
  // for human visitors. Pages with no front counterpart keep their old URLs by redirecting into
  // the notebook, so no link anyone has shared breaks.
  async redirects() {
    return [
      { source: "/glossary", destination: "/notebook/context#glossary", permanent: false },
      { source: "/context", destination: "/notebook/context", permanent: false },
      { source: "/autonomy", destination: "/notebook/autonomy", permanent: false },
      { source: "/arc-agi-3", destination: "/notebook/arc-agi-3", permanent: false },
    ];
  },
};

export default nextConfig;
