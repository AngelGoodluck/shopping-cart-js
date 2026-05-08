let cart = [];

const startShopping = () => {
    cart = [];
document.getElementById("receipt-display").style.display = "none"; // Hiding old receipt
    for (let i = 0; i < 5; i++) {
        let nameInput = prompt(`Item #${i + 1}: Enter name:`);
        let priceInput = prompt(`Item #${i + 1}: Enter price:`);

        cart.push({
            name: nameInput,
            price: Number(priceInput)
        });
    }

    // Display Cart List
    let cartHTML = "<h3>Current Cart:</h3><ul>";
    cart.forEach(item => {
        cartHTML += `<li>${item.name}: $${item.price.toFixed(2)}</li>`;
    });
    cartHTML += "</ul>";
    document.getElementById("cart-display").innerHTML = cartHTML;
    
};

const calculateTotals = (items) => {
    let subtotal = items.reduce((sum, item) => sum + item.price, 0);
    let tax = subtotal * 0.05;
    return {
        subtotal: subtotal,
        tax: tax,
        grandTotal: subtotal + tax
    };
};
const displayReceipt = (totals) => {
    const receiptDiv = document.getElementById("receipt-display");
    receiptDiv.style.display = "block"; // Make it visible
    receiptDiv.innerHTML = `
        <h3>--- OFFICIAL RECEIPT ---</h3>
        <p>Subtotal: $${totals.subtotal.toFixed(2)}</p>
        <p>Tax (5%): $${totals.tax.toFixed(2)}</p>
        <p><strong>Grand Total: $${totals.grandTotal.toFixed(2)}</strong></p>
    `;
};
 
const handlePayment = () => {
    const statusDiv = document.getElementById("payment-status");
    const num1 = prompt("MOMO: Enter mobile number:");
    const num2 = prompt("MOMO: Confirm mobile number:");
    if (num1 !== num2) {
        statusDiv.innerHTML = "<p style='color:red;'> Error: \u274C  Numbers do not match.</p>";
        return;
    }else{

    const pin = "1234";
    const userPin = prompt("Enter MOMO PIN:");
    if (userPin === pin) {
        statusDiv.innerHTML = `
            <p style='color:green;'> \u2705 Payment Successful!</p>
            <p><strong>$${totals.grandTotal.toFixed(2)}</strong> has been deducted from your account. Thank you for shopping with Sharsupply!!!</br></p>
        Have a great day! \uD83D\uDE0A`;

    } else {
        statusDiv.innerHTML = "<p style='color:red;'> Error: \u274C Incorrect PIN.</p>";
    }}
}
 startShopping();
// Running Calculations & Payment
const totals = calculateTotals(cart);
displayReceipt(totals);
handlePayment(totals);