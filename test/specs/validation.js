import HomePage from "../pageobjects/homepage";
import LoginPage from "../pageobjects/loginpage";
// const assert = require('assert');
import assert from 'assert';

const expectedPageTitle = "Login - Female Daily";
const allureReporter = require('@wdio/allure-reporter').default;

describe("validate login", () => {
  it("Should login with valid credentials", async () => {
    allureReporter.addFeature('Login to wordpress')
    await browser.url('/');
    await browser.pause(7000);

    await HomePage.clickLogin();
    await LoginPage.login('asdsd123','sdasda');

    await browser.pause(2000);
    const pageTitle = await browser.getTitle();

    //assert node
    assert.strict.equal(pageTitle, expectedPageTitle);
    //assert by expect
    expect(pageTitle).toEqual('Login - Female Daily');
    
    await LoginPage.expectAccountNotFound();

  });
});


