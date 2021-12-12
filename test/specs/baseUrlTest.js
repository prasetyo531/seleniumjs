const expectedPageTitle = "Login - Female Daily";
const allureReporter = require('@wdio/allure-reporter').default;

var accountNotFound = "(//h1[normalize-space()='Uh-oh! Account not found!'])[1]";

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
    //asset chai
    expect(pageTitle).to.equal('Login - Female Daily');

    const accountNotFound2 = await $(accountNotFound);
    console.log(await accountNotFound2.getText());

    await browser.pause(2000);
  });
});


