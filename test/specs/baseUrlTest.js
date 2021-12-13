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

async function expectAccountNotFound() {
  const accountNotFound2 = await $(accountNotFound).getText();
  console.log('sadsdasd'+accountNotFound2);
  expect(accountNotFound2).to.equal('Uh-oh! Account not found!');
}

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
    allureReporter.addFeature('Login to wordpress')
    await browser.url('/');
    await browser.pause(7000);

    await (await browser.$("#id_loginsignup_home")).click();

    const userName = await browser.$("#id_field_login");
    await userName.setValue("wdiotraining");

    await (await browser.$("#id_btn_login")).isEnabled();
    await (await browser.$("#id_btn_login")).click();

    const userPass = await browser.$("#id_field_pass");
    await userPass.setValue("wdiopass");
    await browser.pause(2000);

    const submitBtn = await browser.$("#id_btn_login");
    await submitBtn.click();

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


