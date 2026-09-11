/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The nav labels /context "Glossary"; visitors type /glossary and got a 404.
  async redirects() {
    return [{ source: "/glossary", destination: "/context#glossary", permanent: false }];
  },
};

export default nextConfig;
