/*jshint esversion: 6 */

$ ( document ).ready( readyNow );

const budget = 25000;
let purchases = [];

function addPurchase () {
  console.log( 'in addPurchase' );
  // get user input create new object
let newPurchase = {
  name: $( '#purchaseNameIn' ).val(),
  price: $( '#purchasePriceIn' ).val(),
};
  // push purchase into Array
  purchases.push(newPurchase);
  // empty inputs
  $( '#purchaseNameIn' ).val( '' );
  $( '#purchasePriceIn' ).val( '' );
  // calculate remaining budget
  calculateRemainingBudget();
  //display to DOM
  displayPurchases();
}

function calculateRemainingBudget () {
  console.log('in calculateRemainingBudget');
  // loop through Purchases
  let totalPrices = 0;
  for (i = 0; i < purchases.length; i++) {
    // add up prices
    totalPrices += Number( purchases[i].price );
    // subtract total prices from budget = remaining budgetOut
  } // end for loop
console.log('totalPrices:', totalPrices);
const remainingBudget = budget - totalPrices;
  //display remaining
  let el = $( '#remainingBudgetOut' );
  el.empty();
  el.append( remainingBudget );
} // end calculateRemainingBudget

function displayPurchases(){
  console.log('in displayPurchases');
  // target output by ID
  let el = $ ('#purchasesOut');
  // empty
  el.empty();
  // loop through purchases
  for (let purchase of purchases) {
    el.append( `<li>` + purchase.name + `: $` + purchase.price + `</li>` );
  }
  // for each purchase, create list item
} // end displayPurchases

function readyNow() {
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
// handle click event
$( '#addPurchaseButton' ).on( 'click', addPurchase );
// init display
calculateRemainingBudget();
} // end readyNow
