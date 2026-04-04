const { test, expect } = require('@playwright/test');

test('검색 결과 표시 테스트', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('.new-todo', '운동하기');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', '공부하기');
  await page.press('.new-todo', 'Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(2);
});

test('할일 삭제 테스트', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('.new-todo', '삭제할 항목');
  await page.press('.new-todo', 'Enter');
  await page.hover('.todo-list li');
  await page.click('.destroy');
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});