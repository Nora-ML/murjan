import { expect, test } from "@playwright/test";

// The GraphQL backend is gone, so these only assert the app shell renders.
// Data-driven flows are added once packages/commerce lands (Phase 4–5).
const routes = ["/", "/shop", "/signin", "/signup", "/cart"];

for (const route of routes) {
	test(`${route} renders without a server error`, async ({ page }) => {
		const response = await page.goto(route);
		expect(response?.status()).toBeLessThan(500);
		await expect(page.locator("body")).not.toBeEmpty();
	});
}
