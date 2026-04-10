const { test, expect } = require('@playwright/test');

test('구글 검색 테스트', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright QA');
  await page.press('textarea[name="q"]', 'Enter');
  await expect(page.locator('#search')).toBeVisible();
});

test('구글 검색 결과 제목 확인', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'Playwright');
  await page.press('textarea[name="q"]', 'Enter');
  await expect(page).toHaveTitle(/Playwright/);
});