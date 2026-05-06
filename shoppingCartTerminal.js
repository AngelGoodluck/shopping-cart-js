//This is an empty array to store items and prices that will be later added.
let cart = [];
const prompt = require('prompt-sync')();

   //this is a loop to continually add items and prices to the object. This loop ends on the 5th item.
for (let i = 0; i < 5; i++) {
  console.log(`--- Item #${i + 1} ---`); // Helps the user keep track of items

   //Accepting user's input.
let nameInput = prompt("Enter item name: ");
let priceInput = prompt("Enter item price: ");

   // Creating the object and add to array
const newItem = {
    name: nameInput,
    price: Number(priceInput) 
};
cart.push(newItem);
}

  
// This is the function definition for finding the grand total.
function showTotal(itemsArray) {
    let subtotal = 0;
    for (let i = 0; i < itemsArray.length; i++) {
        subtotal += itemsArray[i].price;
    } 
    //Assuming the tax is 5%
     const tax = subtotal * 0.05;
    const grandTotal = subtotal + tax;
    console.log("Subtotal: $" + subtotal);
   
    console.log();
    console.log(); //This is to create a new line.
   
    console.log("--- YOUR RECEIPT ---");
    console.log("Items in your cart: " + itemsArray.length);
    console.log("Subtotal: $" + subtotal);
    console.log("Total (with 5% tax): $" + grandTotal);
    return grandTotal;
}


    // For displaying the receipt.
    const finalAmount = showTotal(cart);


console.log()
   console.log('The payment method being used is MOMO, please follow the procedures to complete payment.')

   //Adding a payment method by momo
const mobileNumber1 = prompt("Enter your mobile number: ");
const mobileNumber2 = prompt("Confirm the number you entered: ");
if (mobileNumber1 !== mobileNumber2){        //Checking if the two mobile numbers the user entered match.
  console.log('The numbers do not match')
}else{
 console.log(`An amount of ${finalAmount} is being deducted from your account`)
const pin = 1234
let pin1= prompt("Enter your pin: ")  //Checking if user entered the right pin.
 if(pin1 !== pin){
  console.log("You've entered a wrong pin.")
 }else{
  console.log(`A payment of $ ${finalAmount} has been made to Sharsupply Online Shopping Mall`);
  console.log()
  console.log(`THANKS FOR SHOPPING WITH US AND HAVE A BLISSFUL DAY!!`);
 }
}
