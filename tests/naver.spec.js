const { test, expect } = require('@playwright/test');

test('로그인 성공 테스트', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});

test('로그인 실패 테스트', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpassword');
  await page.click('#submit');
  await expect(page.locator('#error')).toBeVisible();
});

test('로그아웃 테스트', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await page.click('text=Log out');
  await expect(page).toHaveURL(/login/);
});