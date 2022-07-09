import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";

 import {path} from 'app-root-path';
 import {config as configuration} from "dotenv";
 console.log("appRoot", path);
 configuration({ path: `${path}/.env` });

Given(/^As (a|an) (.*) user I login to inventory web page$/, async function (prefixText, userType, dataTable) {
  
  // Getting values from data table
  let dt = dataTable.hashes()

  console.log(`The type of the dt is: ${dt}`) // object
  console.log(`The tyoe of dt is: ${dt.constructor}`) // array of function
  console.log(`The value of dt is:- ${JSON.stringify(dt)}`)
  console.log(`The user type is :- ${userType}`)

    // 1. Launch the browser

    //@ts-ignore
    await browser.url(browser.config.sauceDemoURL);
    console.log(`Test config values: ${JSON.stringify(browser.config)}`)
    
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    await browser.pause(3000);

    // 2. Login into inventory application
    console.log(`proces is:- ${process.env}`);

    console.log(`username is:- ${process.env.TEST_STD_USERNAME}`)
    await $(`#user-name`).setValue(dt[0].Username);
    //await $(`#user-name`).setValue(process.env.TEST_STD_USERNAME);

    await browser.pause(1000);
    
    console.log(`password is:- ${process.env.TEST_STD_PASSWORD}`)
    await $(`#password`).setValue(process.env.TEST_STD_PASSWORD);    
    await browser.pause(2000);
    await $(`#login-button`).click();
    await browser.pause(2000);

    //await browser.debug()
/*
    // Back and forward 
    
    await browser.back();
    await browser.pause(3000);
    await browser.forward();

  // Sourround with try and catch ctrl+shift+p

   Refressh the web page
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