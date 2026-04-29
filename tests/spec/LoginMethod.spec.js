const { test } = require('@playwright/test');
const LoginMethod = require('../page/LoginMethod');

test.describe('Login Tests', () => {
  test('Test case 1: Demo Login', async ({ page }) => {
    const loginPage = new LoginMethod(page);
    await loginPage.openPage();
    await loginPage.demoLogin();
  });
});