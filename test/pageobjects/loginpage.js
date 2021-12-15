

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginpage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#id_field_login');
    }

    get inputPassword() {
        return $('#id_field_pass');
    }

    get btnSubmit() {
        return $('#id_btn_login');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        //await (await browser.$(btnSubmit)).isEnabled();
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        super.open('login');
    }
}

module.exports = new loginpage();
