import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./scripts",
  timeout: 60_000,
  use: {
    browserName: "chromium",
    viewport: { width: 1200, height: 1600 },
    deviceScaleFactor: 1
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: true
  }
});
