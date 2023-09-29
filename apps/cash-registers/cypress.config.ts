import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: "http://127.0.0.1:5173",
    specPattern: "tests/e2e/tests/**/*.spec.{js,jsx,ts,tsx}",
    screenshotOnRunFailure: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: "tests/e2e/support/e2e.ts",
  },
});
