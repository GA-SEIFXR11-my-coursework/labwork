
let p_msg = document.createElement("p");
document.body.appendChild(p_msg);

let p_paymentOption = document.createElement("p");
document.body.appendChild(p_paymentOption);

const h2 = document.getElementById("h2_myRestaurant");
h2.insertAdjacentElement("afterend", p_paymentOption);
h2.insertAdjacentElement("afterend", p_msg);

let itemName = prompt("What would you like to order?");
let drinkName = prompt("What cold drink would you like with that?");

p_msg.innerText += `Your order for ${itemName} with ${drinkName} has been placed.`;

// //"CASH" or "CARD" only
// let paymentMethod = prompt("How would you like to pay? CASH or CARD?");


// switch(paymentMethod){
//     case "CASH":
//         p_paymentOption.innerText += " CASH";
//         break;
//     case "CARD":
//         p_paymentOption.innerText += " CARD";
//         break;
//     default:
//         p_paymentOption.innerText = "INVALID"
//         break;
// }

let userInput = prompt("Please enter payment method (cash or card):");
let paymentRegex = /^(cash|card)$/i; // Regular expression to match "cash" or "card", case-insensitive

p_paymentOption.innerText = "Payment method:"

if (paymentRegex.test(userInput)) {
    if (userInput.toLowerCase() === "cash") {
    p_paymentOption.innerText += " 💵 Cash ";
  } else if (userInput.toLowerCase() === "card") {
    p_paymentOption.innerText += " 💳 Card ";
  }
} else {
    p_paymentOption.innerText = "INVALID PAYMENT METHOD"
    p_msg.innerText = p_msg.innerText.substring(0, p_msg.innerText.length-7); // "placed." is 7 chars 
    p_msg.innerText += " cancelled.";
}
