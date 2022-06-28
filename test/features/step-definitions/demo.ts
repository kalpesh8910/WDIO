import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google Page is opened$/, async function () {
  console.log(`Before opening browser`);
  await browser.url("https://www.google.com/");
  await browser.maximizeWindow();
  await browser.pause(5000);
  console.log(`After opening browser`);
});

When(/^Search with (.*)$/, async function (SearchIteam) {
  let ele = await $(`[name=q]`);
  ele.setValue(SearchIteam);
  await browser.pause(5000);
  await browser.keys("Enter");
});

Then(/^Click on frist result search$/, async function () {
  let ele = await $(`<h3>`);
  ele.click();
  await browser.pause(5000);
});

Then(/^Url should match (.*)$/, async function (ExpectedUrl) {
  console.log(` >> ExpectedUrl: $(ExpectedUrl)`);
  await browser.pause(5000);
});

/*
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
  await browser.pause(5000);
});

When(/^Perform web interaction$/, async function () {
  //1. Input box

  //Actions:
  // 1. Type into input Box
  // 2. Clear the field and type or just addvalue
  // 3. Click and type
  // 4. Slow typing

  let num = 1234566;
  let strnum = num.toString();

  let ele1 = await await $("[type=number]");
  await ele1.click();
  await browser.pause(3000);
  //await ele1.scrollIntoView
  //await ele1.addValue(strnum)
  //await browser.pause(5000);

  //await browser.debug()
  
  // below for loop is user for the typing into a slowly in the field

  for (let i = 0; i < strnum.length; i++) {
    let chatStrr = strnum.charAt(i);
    await browser.pause(1000);
    await browser.keys(chatStrr);
  }
});
