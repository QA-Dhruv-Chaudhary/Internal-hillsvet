const { expect } = require('@playwright/test');
const loginLocators = require('../locator/LoginLocator');
const loginData = require('../data/LoginData.json');

class LoginMethod {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.locator(loginLocators.userNameInput);
    this.passwordInput = page.locator(loginLocators.passwordInput);
    this.loginButton = page.locator(loginLocators.loginButton);
    this.errorMessage = page.locator(loginLocators.errorMessage);
    this.logoutButton = page.locator(loginLocators.logoutButton);
  }

  async openPage(url) {
    await this.page.goto(url);
  }

  async demoLogin() {
    await this.userNameInput.fill(loginData.validUser.username);
    await this.passwordInput.fill(loginData.validUser.password);
    await this.loginButton.click();
  }
}

module.exports = LoginMethod;
