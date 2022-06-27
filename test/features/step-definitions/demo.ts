import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google Page is opened$/, async function () {
  console.log(`Before opening browser`);
  await browser.url("https://www.google.com/");
  await browser.maximizeWindow();
  await browser.pause(10000);
  console.log(`After opening browser`);
});

When(/^Search with (.*)$/, async function (SearchIteam) {
  let ele = await $(`[name=q]`);
  ele.setValue(SearchIteam);
  await browser.pause(10000);
  await browser.keys("Enter");
});


Then(/^Click on frist result search$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
  await browser.pause(10000);
});

Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
  console.log(` >> ExpectedUrl: $(ExpectedUrl)`);
  await browser.pause(10000);

});
