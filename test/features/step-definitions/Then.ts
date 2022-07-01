import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Then(/^Inventory page should list <.*>$/, async function (numberOfproducts) {
 
  if (!numberOfproducts)
    throw Error(`Invalid product count provided: ${numberOfproducts}`);
  await browser.pause(4000)
  let eleArr = await $$(`.inventory_item`);
  await browser.pause(4000)
  chai.expect(eleArr.length).to.equal(parseInt(numberOfproducts)); // ===
  await browser.pause(4000)

});
