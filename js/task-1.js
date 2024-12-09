console.log("↓ Task - 1");

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalSumm = pricePerDroid * quantity;
    if (customerCredits < totalSumm){
        return console.log("Insufficient funds!")
    }
    else return  console.log(`"You ordered ${quantity} droids worth ${totalSumm} credits!"`)
}

makeTransaction(5, 3000, 23000); // "You ordered 5 droids worth 15000 credits!"
makeTransaction(3, 1000, 15000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 5000, 8000); // "Insufficient funds!"
makeTransaction(8, 2000, 10000); // "Insufficient funds!"
makeTransaction(10, 500, 5000); // "You ordered 10 droids worth 5000 credits!"

console.log("↑");
