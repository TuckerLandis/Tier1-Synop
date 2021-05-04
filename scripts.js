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
}

function readyNow() {
  let el = $( '#budgetOut' );
  el.empty();
  el.append( budget );
// handle click event
$( '#addPurchaseButton' ).on( 'click', addPurchase );

} // end readyNow
