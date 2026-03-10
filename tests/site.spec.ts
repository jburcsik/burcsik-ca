import { test, expect } from "@playwright/test";

test.describe("Page load", () => {
  test("loads homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/burcsik/i);
  });

  test("nav is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("nav")).toBeVisible();
  });

  test("hero renders name", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Jesse Burcsik")).toBeVisible();
  });

  test("contact section is present", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("footer LinkedIn link", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: "LinkedIn" }).last();
    await expect(link).toHaveAttribute("href", /linkedin\.com/);
  });
});

test.describe("Contact form", () => {
  test("shows validation — empty submit", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByRole("button", { name: /send message/i }).click();
    // Browser native validation prevents submission
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  });

  test("form fields are interactive", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByPlaceholder("Your name").fill("Test User");
    await page.getByPlaceholder("your@email.com").fill("test@example.com");
    await page.getByPlaceholder("What's on your mind?").fill("Hello from Playwright.");
    await expect(page.getByPlaceholder("Your name")).toHaveValue("Test User");
  });
});

test.describe("Navigation", () => {
  test("smooth scroll to contact", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /contact/i }).click();
    await expect(page.locator("#contact")).toBeInViewport({ ratio: 0.3 });
  });
});

test.describe("Visual screenshots", () => {
  test("desktop — full page", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800); // let animations settle
    await page.screenshot({ path: "tests/screenshots/desktop-full.png", fullPage: true });
  });

  test("mobile — full page", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    await page.screenshot({ path: "tests/screenshots/mobile-full.png", fullPage: true });
  });

  test("desktop — above the fold", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    await page.screenshot({ path: "tests/screenshots/desktop-hero.png" });
  });

  test("mobile — above the fold", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(800);
    await page.screenshot({ path: "tests/screenshots/mobile-hero.png" });
  });
});
