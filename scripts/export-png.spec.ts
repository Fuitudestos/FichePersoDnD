import { test, expect } from "@playwright/test";

test("export character sheet as PNG", async ({ page }) => {
  await page.goto("http://127.0.0.1:5173");
  await expect(page.locator("#character-sheet")).toBeVisible();

  await page.screenshot({
    path: "dist/destos-delaunay.png",
    fullPage: true
  });
});
