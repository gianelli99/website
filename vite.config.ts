import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const publicBasePath = process.env.PUBLIC_BASE_PATH ?? "/website";

export default defineConfig({
  base: `${publicBasePath}/`,
  plugins: [
    remix({
      basename: publicBasePath,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
