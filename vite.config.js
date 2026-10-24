import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

function contentSecurityPolicy(contactOrigin) {
  const policy = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    `connect-src 'self' ${contactOrigin}`,
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  return {
    name: "content-security-policy",
    apply: "build",
    transformIndexHtml: () => [
      {
        tag: "meta",
        attrs: { "http-equiv": "Content-Security-Policy", content: policy },
        injectTo: "head-prepend",
      },
      {
        tag: "meta",
        attrs: { name: "referrer", content: "strict-origin-when-cross-origin" },
        injectTo: "head-prepend",
      },
    ],
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "VITE_");
  const contactOrigin = new URL(
    env.VITE_CONTACT_ENDPOINT || "https://formsubmit.co",
  ).origin;

  return {
    plugins: [react(), contentSecurityPolicy(contactOrigin)],
    resolve: {
      alias: {
        "@": path.resolve(root, "src"),
      },
    },
  };
});
