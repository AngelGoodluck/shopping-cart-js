# Shopping Cart & MoMo Payment System

A clean, functional web-based prototype built with **HTML5, CSS3, and JavaScript**. This application simulates a retail checkout process, including itemized entry, tax calculations, and a simulated Mobile Money (MoMo) payment gateway.

## 🚀 Features

- **Limited Item Entry:** Users can input the name and price for exactly **5 items**.
- **Automated Billing Logic:**
  - **Subtotal:** Automatically sums the prices of all 5 items.
  - **Tax Calculation:** Applies a fixed **5% tax** to the subtotal.
  - **Grand Total:** Calculates the final payable amount (Subtotal + Tax).
- **Secure MoMo Simulation:** 
  - Validates user input for **Mobile Number** and **PIN**.
  - Uses internal comparison logic to verify credentials.
- **Dynamic Receipt Generation:** On successful payment, the app displays a comprehensive digital receipt, the finalized cart, and a success confirmation message.

## 🛠️ Tech Stack

- **HTML5:** For the structural layout of the prompts and the final receipt.
- **CSS3:** For styling the interface and the payment modal.
- **JavaScript (ES6):** Handles all internal calculations, the 5-item limit logic, and the MoMo verification sequence.

## 📝 How to Use

1.  **Enter Items:** Follow the on-screen prompts to enter the name and price of your 5 purchases.
2.  **Review Totals:** The system will display your subtotal and the 5% tax automatically.
3.  **Payment:** Select the MoMo option.
4.  **Verification:** Enter your registered mobile number and PIN.
5.  **Success:** If the credentials match, the screen will update to show your "Payment Successful" message along with your detailed receipt.

## 📂 Project Structure

```text
├── index.html    Main structure and UI
├── style.css     Layout and design styling
└── script.js     Logic for calculations and MoMo validation
```

---
*Developed as a demonstration of basic JavaScript arithmetic and conditional logic.*

## Author
[https://github.com/AngelGoodluck]
