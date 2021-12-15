import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class securepage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('#flash');
    }
}

module.exports = new securepage();
