import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

/*
Then(/^Inventory page should list <.*>$/, async function (numberOfproducts) {
 
  if (!numberOfproducts)
    throw Error(`Invalid product count provided: ${numberOfproducts}`);
  await browser.pause(4000)
  let eleArr = await $$(`.inventory_item_name`);
  await browser.pause(7000)
  chai.expect(eleArr.length).to.equal(parseInt(numberOfproducts)); // ===
  await browser.pause(7000)

});
*/
/*

Steps:-
1. Get price list
2. COnvert string to nunmber
3. Aseert if any value is <=
*/

Then(/^Validate all products have valid price$/, async function(){

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

let invalidpriceArray = pricenumarr.filter(ele => ele<=0);

expect(invalidpriceArray.length).to.equal(0);

})