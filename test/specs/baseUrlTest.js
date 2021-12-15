const HomePage = require('../pageobjects/homepage');
const LoginPage = require('../pageobjects/loginpage');

const expectedPageTitle = "Login - Female Daily";
const allureReporter = require('@wdio/allure-reporter').default

//problem with assert,assert wrong, but test is passed
function confirmSuccessfulSubmission() {
  browser.pause(2000);
  const accountNotFound3 = $(accountNotFound);
  var validateSubmissionHeader = browser.waitUntil(function() {
    return browser.getText(accountNotFound3) == 'Uh-oh! Account not found!'
  }, 3000)
  expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
}

//problem with assert,assert wrong, but test is passed
async function checkAccountNotFound() {
  const accountNotFound2 = $(accountNotFound);
  await expect(accountNotFound2).toMatch('Uh-oh! Account not founddd!')
}

describe("Login to wordpress", () => {
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
    
    LoginPage.expectAccountNotFound();

    //assert by expect
    // const accountNotFound2 = await $(accountNotFound).getText();
    // console.log('sadsdasd'+accountNotFound2);
    // expect(accountNotFound2).to.equal('Uh-oh! Account not found!');
    //LoginPage.expectAccountNotFound();
  });
});


