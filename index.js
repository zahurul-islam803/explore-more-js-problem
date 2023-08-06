// check array using Array.isArray
// const friends = [13,15,18,61,51,72,94];
// console.log(Array.isArray(friends));
// const newFriends = [11,20,70,12,13];
// const allFriends = friends.concat(newFriends);
// console.log(allFriends);

// slice & splice method
// const friends = [13, 15, 18, 61, 51, 72, 94];
// const partial = friends.slice(2, 5);
// console.log(partial);
// console.log(friends);

// const friends = [13, 15, 18, 61, 51, 72, 94];
// const partial = friends.splice(2, 3, 1, 5, 4);
// console.log(partial);
// console.log(friends);

// Remove Duplicate array
// const names = ['abul', 'babul', 'mabul', 'sabul', 'cabul', 'kabul', 'rabul', 'babul', 'sabul', 'ibul', 'libul', 'cabul', 'kabul', 'cabul'];
// function removeDuplicate(names){
//   const unique = [];
//   for(let item of names){
//     if(unique.includes(item) === false){
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// const remove = removeDuplicate(names);
// console.log(remove);

// practice problem
// for(let i = 1; i <= 50; i++){
//   if(i % 3 == 0 && i % 5 == 0){
//     console.log('foobar');
//   }
//   else if(i % 3 == 0){
//     console.log('foo');
//   }else if(i % 5 == 0){
//     console.log('bar');
//   }else{
//     console.log(i);
//   }
// }

// function woodQuantity(chairQty, tableQty, bedQty){
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   const chairWood = perChairWood * chairQty;
//   const tableWood = perTableWood * tableQty;
//   const bedWood = perBedWood * bedQty;

//   const totalWood = chairWood + tableWood + bedWood;
//   return totalWood;
// }

// const totalWood = woodQuantity(5,2,1);
// console.log(totalWood);

// cheapest price
// const phones = [
//   { name: "xiaomi", camera: 12, storage: "64gb", price: 21500, color: "blue" },
//   { name: "samsung", camera: 32, storage: "128gb", price: 32000, color: "white" },
//   { name: "iphone", camera: 64, storage: "64gb", price: 72000, color: "black" },
//   { name: "oppo", camera: 72, storage: "32gb", price: 15000, color: "blue" },
//   { name: "vivo", camera: 8, storage: "64gb", price: 17000, color: "golden" },
//   { name: "nokia", camera: 80, storage: "132gb", price: 71000, color: "white" },
// ];

// function cheapestPhone(phones){
//   let cheapest = phones[0];
//   for(let phone of phones){
//     if(phone.price < cheapest.price){
//       cheapest = phone;
//     }
//   }
//   return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

// highest camera
// const phones = [
//   { name: "xiaomi", camera: 12, storage: "64gb", price: 21500, color: "blue" },
//   { name: "samsung", camera: 32, storage: "128gb", price: 32000, color: "white" },
//   { name: "iphone", camera: 64, storage: "64gb", price: 72000, color: "black" },
//   { name: "oppo", camera: 72, storage: "32gb", price: 15000, color: "blue" },
//   { name: "vivo", camera: 8, storage: "64gb", price: 17000, color: "golden" },
//   { name: "nokia", camera: 80, storage: "132gb", price: 71000, color: "white" },
// ];

// function cheapestPhone(phones){
//   let cheapest = phones[0];
//   for(let phone of phones){
//     if(phone.camera > cheapest.camera){
//       cheapest = phone;
//     }
//   }
//   return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection);

// total price of carts
// const shoppingCart = [
//   {name: 'shoe', price: 1500, quantity: 2},
//   {name: 'shirt', price: 1700, quantity: 4},
//   {name: 'pant', price: 1900, quantity: 3},
//   {name: 'belt', price: 500, quantity: 2},
// ]

// function totalCost(products){
//   let sum = 0;
//   for(let total of products){
//     sum = sum + ((total.price) * total.quantity);
//   }
//   return sum;
// }

// const expense = totalCost(shoppingCart);
// console.log('Total cost for shopping today:', expense, 'taka.');

// Ticket Price Count
// function ticketPrice(ticketQuantity){
//   const first100Ticket = 100;
//   const second100Ticket = 90;
//   const restTicket = 70;
//   if(ticketQuantity <=100){
//     const price = ticketQuantity * first100Ticket;
//     return price;
//   }
//   else if(ticketQuantity <= 200){
//     const restTicketQuantity = ticketQuantity - 100;
//     const restTicketPrice = restTicketQuantity * second100Ticket;
//     const first100Price = 100 * (ticketQuantity - restTicketQuantity);
//    const totalPrice = first100Price + restTicketPrice;
//     return totalPrice;
//   }
//   else{
//     const first100Price = 100 * first100Ticket;
//     const second100Price = 100 * second100Ticket;
//     const restTicketQuantity = ticketQuantity - 200;
//     const restTicketPrice = restTicketQuantity * restTicket;
//     const  totalPrice = first100Price + second100Price + restTicketPrice;
//     return totalPrice;
//   }
// }

// const getQuantity = ticketPrice(210);
// console.log(getQuantity);

// ----------------------------
// practice problem solve

// Find the second largest number

// const arr = [11,2,44,7,6,25,19,47,10];
// function getSecondLargestNumber(arr){
//   let firstLargestNumber = arr[0];
//   let secondLargestNumber = arr[0];
//   for(let item of arr){
//     if(item > firstLargestNumber){
//       secondLargestNumber = firstLargestNumber;
//       firstLargestNumber = item;
//     }
//     else if(item > secondLargestNumber){
//       secondLargestNumber = item;
//     }
//   }
//   return secondLargestNumber;
// }
// const largestNumber = getSecondLargestNumber(arr);
// console.log(largestNumber);

// problem no: 1---feet to inch

// function feetToInch(feet){
//   const getInch = feet * 12;
//   return getInch;
// }
// const inch = 2;
// const result = feetToInch(inch);
// console.log(result , 'Inch');

// problem no: 2---centimeter to meter

// function centimeterToMeter(centimeter){
//   const getMeter = centimeter / 100;
//   return getMeter;
// }
// const centimeter = 500;
// const result = centimeterToMeter(centimeter);
// console.log(result, 'Meter');

// problem no: 3----Count Paper

// function paperRequirements(book1Qty, book2Qty, book3Qty) {
//   const book1Paper = 100;
//   const book2Paper = 200;
//   const book3Paper = 300;

//   const totalPaperBook1 = book1Paper * book1Qty;
//   const totalPaperBook2 = book2Paper * book2Qty;
//   const totalPaperBook3 = book3Paper * book3Qty;
//   const totalPaper = totalPaperBook1 + totalPaperBook2 + totalPaperBook3;
//   return totalPaper;
// }

// const result = paperRequirements(4, 2, 1);
// console.log(result);



// problem no: 4----Best Friends largest length

// const friends = ['salam', 'kalam islam', 'malam', 'alam', 'jalam hossain','lablu mia'];
// function bestFriend(friends){
//   let friendLength = friends[0];
//  for(let friend of friends){
//   if(friend.length > friendLength.length){
//     friendLength = friend;
//   }
//  }
//  return friendLength;
// }
// const result = bestFriend(friends);
// console.log(result);



// problem no: 5----onlyPositiveArray

// const  numbers = [45,10,20,35,45,85,0,-70,60,90,30];
// function onlyPositiveArray(numbers){
//   let positiveArray = [];
//   for(let positive of numbers){
//     if(positive < 0){
//       break;
//     }
//     positiveArray.push(positive);
//   }
//   return positiveArray;
// } 
// const result = onlyPositiveArray(numbers);
// console.log(result);

// ----------------------------
  

// Fun Task

// function pandaCost(singaraQuantity, somucaQuantity, jilapiQuantity){
//   const singaraPrice = 7;
//   const somucaPrice = 10;
//   const jilapiPrice = 15;

//   const singaraTotalPrice = singaraQuantity*singaraPrice;
//   const somucaTotalPrice = somucaQuantity*somucaPrice;
//   const jilapiTotalPrice = jilapiQuantity*jilapiPrice;
//   const totalCost = singaraTotalPrice + somucaTotalPrice + jilapiTotalPrice;
//   return totalCost;
// }
// const totalPrice = pandaCost(1,2,1);
// console.log(totalPrice);
