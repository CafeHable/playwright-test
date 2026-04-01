const { test, expect } = require('@playwright/test');

test('로그인 성공 테스트', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});