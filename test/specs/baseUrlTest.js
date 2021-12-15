const HomePage = require('../pageobjects/homepage');
const LoginPage = require('../pageobjects/loginpage');

const expectedPageTitle = "Login - Female Daily";
const allureReporter = require('@wdio/allure-reporter').default;

var accountNotFound = "(//h1[normalize-space()='Uh-oh! Account not found!'])[1]";

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

//problem with assert,assert wrong, but test is passed
async function expectAccountNotFound() {
  const accountNotFound2 = await $(accountNotFound).getText();
  console.log('sadsdasd'+accountNotFound2);
  //expect(accountNotFound2).to.contains('Uh-oh! Account not found!');
  //assert.strict.equal(accountNotFound2, "expectedPageTitle");
  expect(accountNotFound2).to.strict('Thank You for your Message!');
}

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
    allureReporter.addFeature('Login to wordpress')
    await browser.url('/');
    await browser.pause(7000);

    HomePage.clickLogin();

    LoginPage.login('asdsd123','sdasda');

    await browser.pause(2000);
    const pageTitle = await browser.getTitle();

    //assert node
    assert.strict.equal(pageTitle, expectedPageTitle);
    //assert by expect
    expect(pageTitle).to.equal('Login - Female Daily');

    //assert by expect
    // const accountNotFound2 = await $(accountNotFound).getText();
    // console.log('sadsdasd'+accountNotFound2);
    // expect(accountNotFound2).to.equal('Uh-oh! Account not found!');
    expectAccountNotFound();

    await browser.pause(2000);
  });
});


