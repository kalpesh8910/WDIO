import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

/*  WebTables:- */
/*  1. Check number of row and column
    2. Check whole table data
    3. Get single row [] based on condition]
    4. Get single column
    5. Get single cell value [based on another cell]
*/

Given(/^Open the website$/, async function () {

await browser.url("/tables");
await browser.maximizeWindow();
await browser.pause(4000)
console.log("Website open sucessfully...")

})

// 1. Check number of row and column

let rowcount;
let colcount;

 Then(/^Check number of row and column$/, async function(){

 rowcount = await $$(`//table[@id='table1']/tbody/tr`).length
 expect(rowcount).to.be.equal(4);
 console.log(`number of ros: ${rowcount}`);
 await browser.pause(4000);

 colcount = await $$(`//table[@id='table1']/thead/tr/th`).length
 console.log(`number of columns: ${colcount}`)
 expect(colcount).to.be.equal(6);
 await browser.pause(4000);
})

  // 2. Check whole table data
  // table[@id='table1']/tbody/tr[4]/td[6]

 Then(/^Check whole table data$/, async function(){

     for(let i=0; i<rowcount; i++){
         for(let j=0; j<colcount; j++){
             let cellval = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText()
             console.log(`Cell value is:-${cellval}`)
        }
     }
  })

  // 3. Get single row [] based on condition]

  
 
 
