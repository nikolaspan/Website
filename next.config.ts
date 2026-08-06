import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — no Node.js server required for deployment.
  output: "export",
  // Emit each route as a folder with index.html (clean static URLs).
  trailingSlash: true,
  // next/image optimization needs a server; disable it for static hosting.
  images: { unoptimized: true },
  // Dev-only: allow loading the dev server (and its HMR websocket) from these
  // LAN origins, e.g. when testing on a phone. Ignored by `next build`/export.
  allowedDevOrigins: ["192.168.1.14","192.168.1.194"],
};

export default nextConfig;
