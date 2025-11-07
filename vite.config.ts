import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
      react(),
      runtimeErrorOverlay(),
      svgr(),
      ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
        ? [
            await import("@replit/vite-plugin-cartographer").then((m) =>
              m.cartographer(),
            ),
            await import("@replit/vite-plugin-dev-banner").then((m) =>
              m.devBanner(),
            ),
          ]
        : []
      ),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
      },
      },
      server: {
        fs: {
          strict: true,
          deny: ["**/.*"],
        },
      },
    });
