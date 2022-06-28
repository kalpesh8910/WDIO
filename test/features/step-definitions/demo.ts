import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { idText, SymbolDisplayPartKind } from "typescript";

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
  //await browser.url("/inputs");
  //await browser.url("/dropdown");
  await browser.url("/checkboxes");
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

  //let num = 1234566;
  //let strnum = num.toString();

  //let ele1 = await await $("[type=number]");
  //await ele1.click();
  //await browser.pause(3000);
  // await ele1.scrollIntoView
  // await ele1.addValue(strnum)
  // await browser.pause(5000);

  // await browser.debug()

  // below for loop is user for the typing into a slowly in the field

  //for (let i = 0; i < strnum.length; i++) {
  //let chatStrr = strnum.charAt(i);
  //await browser.pause(1000);
  //await browser.keys(chatStrr);

  // 2. Dropdown
  //Actions:
  //1. Assert default option is selected or not
  //2. Select by attribute, text , inbox
  //3. Get a list of options

  // 1. Assert default option is selected
  // Get the text from drop down
  // let ele2 = await $('//select/option[@selected="selected"]')
  // await browser.pause(2000);
  // let val = await ele2.getText();
  // console.log("Val of the text is :- ",val)
  // await browser.pause(2000);
  // expect(val).to.equal('Please select an option');
  // await browser.pause(2000);

  // 2. Select a specific option from drop down
  // let ddele = await $('#dropdown');
  // //await ddele.selectByVisibleText("Option 2");
  // await ddele.selectByAttribute("value", "1")
  // await ddele.selectByIndex(2);
  // await browser.pause(4000);
  // await browser.debug();

  // 3. Get a list of options

  // let eleArray = await $$('select > option');
  // let arr = []
  // for (let i = 0; i < eleArray.length; i++) {
  //   let ele = eleArray[i];
  //   let val = await ele.getText();
  //   arr.push(val);
  //   console.log("value of the drop down is:-",val);
  // }

  // console.log('>> option array: ${arr}');

  // 4. Checkbox
  // Actions:
  // 1. Select an options
  // 2. Unselect an option (if selected)
  // 3. Assert if option is selected
  // 4. Select all options

  // await browser.pause(3000);
  // let ele = await $("//input[@type='checkbox'][1]");
  // if(! await ele.isSelected()){

  //   await ele.click();
  // }
  // let ele = await $("//input[@type='checkbox'][2]");
  // let ischecked = await ele.isSelected()

  // expect(ischecked).to.be.true

  // await browser.pause(3000);
  // await ele.click();
  // await browser.pause(3000);
  //await browser.debug()

  let eleArr = await $$("//form[@id='checkboxes']/input");

  for (let i = 0; i < eleArr.length; i++) {
    let ele = eleArr[i];
    if (!(await ele.isSelected())) {
      ele.click();
      await browser.pause(5000);
    }
  }
});
