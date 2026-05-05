function startShopping() {
    let cart = [];
    const receiptDiv = document.getElementById('receipt');
    receiptDiv.style.display = "block";
    receiptDiv.innerHTML = "Processing your order...\n";

    //  //this is a loop to continually add items and prices to the object. This loop ends on the 5th item.
    for (let i = 0; i < 5; i++) {
        let nameInput = prompt(`Item #${i + 1}: Enter item name:`);
        let priceInput = prompt(`Item #${i + 1}: Enter item price:`);

        const newItem = {
            name: nameInput,
            price: Number(priceInput)
        };
        cart.push(newItem);
    }

    //  This is the function definition for finding the grand total.
    function showTotal(itemsArray) {
        let subtotal = 0;
        for (let i = 0; i < itemsArray.length; i++) {
            subtotal += itemsArray[i].price;
        }
        const tax = subtotal * 0.05;
        const grandTotal = subtotal + tax;

        let output = `--- YOUR RECEIPT ---\n`;
        output += `Items in your cart: ${itemsArray.length}\n`;
        output += `Subtotal: $${subtotal.toFixed(2)}\n`;
        output += `Total (with 5% tax): $${grandTotal.toFixed(2)}\n\n`;
        
        return { grandTotal, output };
    }

    const result = showTotal(cart);
    const finalAmount = result.grandTotal;
    receiptDiv.innerHTML = result.output;

     //Adding a payment method by momo
    alert("The payment method being used is MOMO. Follow the prompts.");
    
    const mobileNumber1 = prompt("Enter your mobile number:");
    const mobileNumber2 = prompt("Confirm your mobile number:");

    if (mobileNumber1 !== mobileNumber2) {
        receiptDiv.innerHTML += "❌ Error: The numbers do not match.";
    } else {
        const pin = "1234";
        let pin1 = prompt(`An amount of $${finalAmount.toFixed(2)} is being deducted. Enter your pin:`);

        if (pin1 !== pin) {
            receiptDiv.innerHTML += "❌ Error: You've entered a wrong pin.";
        } else {
            receiptDiv.innerHTML += `✅ Payment of $${finalAmount.toFixed(2)} made to Sharsupply.\n`;
            receiptDiv.innerHTML += `THANKS FOR SHOPPING WITH US!`;
        }
    }
}
