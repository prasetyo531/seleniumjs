const Page = require('./page');

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

    get submitButton() {
        return $('#id_loginsignup_home');
    }

    click() {
        this.submitButton.click();
    }

    clickLogin() {
        this.click();
    }
}

module.exports = new homepage();