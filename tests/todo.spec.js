const { test, expect } = require('@playwright/test');

test('할일 추가 테스트', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('.new-todo', '자동화 테스트 공부하기');
  await page.press('.new-todo', 'Enter');
  await expect(page.locator('.todo-list li')).toHaveText('자동화 테스트 공부하기');
});

test('할일 완료 테스트', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('.new-todo', '자동화 테스트 공부하기');
  await page.press('.new-todo', 'Enter');
  await page.click('.toggle');
  await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});