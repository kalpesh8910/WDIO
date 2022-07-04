import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given(/^login to inventory web page$/, async function () {

    // 1. Launch the browser

    await browser.url("https://www.saucedemo.com/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    await browser.pause(3000);

    // 2. Login into inventory application

    await $(`#user-name`).setValue(`standard_user`);
    await browser.pause(3000);
    await $(`#password`).setValue(`secret_sauce`);
    await browser.pause(3000);
    await $(`#login-button`).click();
    await browser.pause(3000);
    
  });