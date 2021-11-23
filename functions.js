'use strict';

// 1. isHometown

// Define your function here
function hometown(town) {
    if (town === 'San Francisco') {
        return true; 
    }
    else {
        return false;
    }      
}

// 2. getFullName

// Define your function here
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


// 3. calculateTotal

// Define your function here
function calculateTotal(basePrice, state, tax=0.05) {
    const subTotal = basePrice * (1 + tax)
    let fee = 0

    if (state === 'CA') {
        fee = 0.03 * subTotal;
    }
    else if (state === "PA") {
        fee = 2;
    }
    else if (state === "MA") {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return subTotal + fee
}

// console.log(calculateTotal(5, "MA"))
