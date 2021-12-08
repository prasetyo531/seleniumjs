const assert = require("assert");
const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
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

    const submitBtn = await browser.$("#wp-submit");
    await submitBtn.click();

    await browser.pause(2000);
    const pageTitle = await browser.getTitle();

    assert.strict.equal(pageTitle, expectedPageTitle);

    await browser.pause(2000);
  });
});


