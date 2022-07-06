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

    await browser.debug()
/*
    // Back and forward 
    
    await browser.back();
    await browser.pause(3000);
    await browser.forward();
/*
  // Sourround with try and catch ctrl+shift+p

  // Refressh the web page
    try {
      await $(`#user-nam`).setValue(`standard_user`);
      await browser.pause(3000);
      await $(`#password`).setValue(`secret_sauce`);
      await browser.pause(3000);
      await $(`#login-button`).click();
      await browser.pause(3000);
    
    } catch (err) {
      console.log(`Error in first login. Retrying..`)
      await browser.pause(5000)
      await browser.refresh();
      await $(`#user-name`).setValue(`standard_user`);     
      await browser.pause(5000)
      await $(`#password`).setValue(`secret_sauce`);
      await browser.pause(5000)     
      await $(`#login-button`).click();
      await browser.pause(5000)
     
    }
*/
    // Reload the session
/*
    await browser.reloadSession()
    await browser.url("https://www.saucedemo.com/");
    await $(`#user-name`).setValue(`problem_user`);
    await browser.pause(3000);
    await $(`#password`).setValue(`secret_sauce`);
    await browser.pause(3000);
    await $(`#login-button`).click();
    await browser.pause(3000);
*/
    
  });