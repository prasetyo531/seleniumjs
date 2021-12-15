import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homepage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartButton() {
        return $('#id_carthome');
    }

    get loginSignupButton() {
        return $('#id_loginsignup_home');
    }

    async clickLogin() {
        await this.loginSignupButton.waitForDisplayed();
        await this.loginSignupButton.click();
      }
}

module.exports = new homepage();