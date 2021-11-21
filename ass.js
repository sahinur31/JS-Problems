// problem 1 = seer to Mon calculator
function seerToMon(seer){
    if (seer < 0){
        return 'Please give a positive number'; 
    }
    var mon = seer / 40; // 40 seer = 1 mon;
    return mon;
}
let mySeer = seerToMon(120);
console.log(mySeer);

// problem 2 = total sales
function totalSales(shirtQuantity,pantQuantity,shoesQuantity){
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoesQuantity != 'number' ){
        return 'Please give a number'; 
    }
    let perShirtPrice = 100;
    let perPantPrice = 200;
    let perShoesPrice = 500;
    // Price calculation
    let shirtPrice = shirtQuantity * perShirtPrice;
    let pantPrice = pantQuantity * perPantPrice;
    let shoesPrice = shoesQuantity * perShoesPrice;
    let totalCost = shirtPrice + pantPrice + shoesPrice;
    return totalCost;
}
let mySales = totalSales(0,1,1);
console.log(mySales);

// Problem 3: delivery cost calculation
function deliveryCost(totalDelivery){
    const firstHundredDeliveryCost = 100;
    const secondHundredDeliveryCost = 80;
    const overSecondHundredDeliveryCost = 50;
    if (totalDelivery <0 ){
        return "Please enter a positive number";
    }
    else if (totalDelivery <= 100 && totalDelivery >= 0){
        const count = totalDelivery * firstHundredDeliveryCost;
        return count;
    } else if (totalDelivery > 100 && totalDelivery <=200){
        const firstHundredDelivery = 100 * firstHundredDeliveryCost;
        const restDelivery = totalDelivery - 100;
        const secondHundredDelivery = restDelivery * secondHundredDeliveryCost;
        const finalDeliveryCost = firstHundredDelivery + secondHundredDelivery;
        return finalDeliveryCost;
    } else{
        const firstHundredDelivery = 100 * firstHundredDeliveryCost;
        const secondHundredDelivery = 100 * secondHundredDeliveryCost;
        const restDelivery = totalDelivery - 200;
        const overSecondHundredDelivery = restDelivery * overSecondHundredDeliveryCost;
        const finalDeliveryCost = firstHundredDelivery + secondHundredDelivery + overSecondHundredDelivery;
        return finalDeliveryCost;
    }
}
const myDeliveryCost = deliveryCost(10);
console.log(myDeliveryCost);

// Problem 4: find perfect friend
var friends = ["babu","abul","hablu", "kabul", "dablu", "boltus"];
function perfectFriend(array){
  var lengthFiveString = array[0];
  for (i = 0; i < array.length; i++) {
    if(array[i].length == 5) {
        lengthFiveString = array[i];
      break;
    } 

  }
  return lengthFiveString;
}
console.log(perfectFriend(friends));