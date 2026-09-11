// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://donate-blood.mcenahle.care",
  trailingSlash: "always",
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
});
