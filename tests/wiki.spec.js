const { test, expect } = require('@playwright/test');
const { WikiPage } = require('../pages/WikiPage');

test('위키피디아 검색 테스트', async ({ page }) => {
  const wiki = new WikiPage(page);
  await wiki.goto();
  await wiki.search('Playwright');
  await expect(wiki.firstHeading).toBeVisible();
});