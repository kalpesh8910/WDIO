import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import logger from "../../helper/logger"; 
import {format, createLogger, transports, info, Logger } from "winston"


Then(/^Inventory page should list (.*)$/, async function (numberOfproducts) {
 
 // throw Error (` error is:()`)
  console.log(`Then file step test id is:- ${this.testid}`);
  
  // console.log(`app id is:-${this.appid}`);

  if (!numberOfproducts)
    throw Error(`Invalid product count provided: ${numberOfproducts}`);
  await browser.pause(4000)
  let eleArr = await $$(`.inventory_item_name`);
  console.log(eleArr.length)
  await browser.pause(7000)
 // console.log("typeof", typeof eleArr.length, typeof numberOfproducts);
  expect(eleArr.length).to.be.equal(parseInt(numberOfproducts)); // ===
  await browser.pause(7000)
  console.log("Test cases exceuted sucessfully...")

});

/*

Steps:-
1. Get price list
2. COnvert string to nunmber
3. Aseert if any value is <=
*/


Then(/^Validate all products have valid price$/, async function(){
  logger.info(`${this.testid}: Checking the price.`)
  // Step1. Get the price list
  let eleArr = await $$(`.inventory_item_price`)
  let priceStrArr = []

for (let i=0; i<eleArr.length; i++){
  let pricestr = await eleArr[i].getText();
  priceStrArr.push(pricestr)
}
console.log(` All the product price with $:-${priceStrArr}`);

// 2. COnvert string to nunmber
let pricenumarr = priceStrArr.map(ele => +(ele.replace("$", "")));
console.log(`Price in numbers:- ${pricenumarr}`);
 
// 3. Aseert if any value is <=

let invalidpriceArray = pricenumarr.filter(ele => ele<=0)
expect(invalidpriceArray.length).to.equal(0);

})
