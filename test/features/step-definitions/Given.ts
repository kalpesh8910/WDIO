import { Given } from "@wdio/cucumber-framework";
import { expect } from "chai";
import logger from "../../helper/logger";
import {format, createLogger, transports, info, Logger } from "winston"
import allure from "@wdio/allure-reporter"
import reporter from "../../helper/reporter";
import sauseHomePage from "../../page-objects/sause.home.page";

 import {path} from 'app-root-path';
 import {config as configuration} from "dotenv";
 console.log("appRoot", path);
 configuration({ path: `${path}/.env` });

Given(/^As (a|an) (.*) user I login to inventory web page$/, async function (prefixText, userType, dataTable) {
    
  try{

    reporter.addStep(this.testid, "info", "Login to sause demo.")
    let dt = dataTable.hashes()
    // @ts-ignore

    await sauseHomePage.navigateTo(browser.config.sauceDemoURL)
    await sauseHomePage.loginTosauceApp(this.testid, process.env.TEST_STD_USERNAME, process.env.TEST_STD_PASSWORD)
    
    // we can write as per below
    // sauseHomePage.enterUsername
    // sauseHomePage.enterpassword
    // sauseHomePage.ClickloginBtn
    
  } catch(err){
    err.message `${this.testid}: Failed at login step.${err.message}`
    throw err
  }
  });