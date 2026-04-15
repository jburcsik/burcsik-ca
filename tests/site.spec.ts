import { test, expect } from "@playwright/test";

test.describe("Page load", () => {
  test("loads homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/burcsik/i);
  });

  test("nav is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header")).toBeVisible();
  });

  test("hero renders name", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("footer LinkedIn link", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: "LinkedIn" }).last();
    await expect(link).toHaveAttribute("href", /linkedin\.com/);
  });
});

test.describe("Navigation", () => {
  test("Get in touch CTA links to email", async ({ page }) => {
    await page.goto("/");
    const cta = page.getByRole("link", { name: /get in touch/i }).first();
    await expect(cta).toHaveAttribute("href", "mailto:jesse@burcsik.ca");
  });
});

async function scrollAndCapture(page: any, filename: string) {
  await page.goto("/");
  await page.waitForTimeout(600);
  // Scroll through page to trigger all InView animations
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let pos = 0;
      const step = 300;
      const interval = setInterval(() => {
        window.scrollBy(0, step);
        pos += step;
        if (pos >= document.body.scrollHeight) {
          window.scrollTo(0, 0);
          clearInterval(interval);
          resolve();
        }
      }, 80);
    });
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: filename, fullPage: true });
}

test.describe("Visual screenshots", () => {
  test("desktop — full page", async ({ page }) => {
    await scrollAndCapture(page, "tests/screenshots/desktop-full.png");
  });

  test("mobile — full page", async ({ page }) => {
    await scrollAndCapture(page, "tests/screenshots/mobile-full.png");
  });

  test("desktop — hero", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    await page.screenshot({ path: "tests/screenshots/desktop-hero.png" });
  });

  test("desktop — about section", async ({ page }) => {
    await page.goto("/");
    await page.locator("#about").scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: "tests/screenshots/desktop-about.png" });
  });
});
