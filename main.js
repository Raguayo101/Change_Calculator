// Write your JavaScript here
// we want get an dollar amount and subtract that by the price of item and have it spit out change
// let changeDue = (userDollar, itemPrice) => {
//     // get user amount 
//     let userDollar = document.getElementById('amount-received');
//     // get item price
//     let itemPrice = document.getElementById('amount-due');
//     // return change due
//     let change = userDollar - itemPrice;
//     return change;
// }

// let us get the dollar change from the user input
let calculateChange = (total) => {
    let dollar = Math.floor(total);
    document.getElementById('dollars-output').innerHTML = dollar;
    console.log(dollar)
    let remainingChange = total - dollar
    console.log(remainingChange);

    let quarter = Math.floor(remainingChange / .25);
    document.getElementById('quarters-output').innerHTML = quarter;
    console.log(quarter)
    remainingChange = (remainingChange - (quarter * .25)).toFixed(2);
    parseFloat(remainingChange);
    console.log(remainingChange);


    let dime = Math.floor(remainingChange / .1);
    document.getElementById('dimes-output').innerHTML = dime;
    console.log(dime);
    remainingChange = remainingChange - dime * .10;
    console.log(remainingChange);

    let nickel = Math.floor(remainingChange / .05)
    document.getElementById('nickels-output').innerHTML = nickel;
    console.log(nickel)
    remainingChange = remainingChange - nickel * .05;

    let pennies = Math.round(remainingChange * 100)
    document.getElementById('pennies-output').innerHTML = pennies;
    console.log(pennies)
};


function handleClickEvent(e) {

    let userAmount = document.getElementById('amount-received').value;
    let itemAmount = document.getElementById('amount-due').value;

    let amountDue = userAmount - itemAmount;

    let result = calculateChange(amountDue);
}


document.getElementById('calculate-change').onclick = handleClickEvent;

