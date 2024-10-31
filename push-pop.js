const numbers = [12,32,45,65,78,98];   
console.log(numbers);

numbers.push(11,13);// insert in last element

console.log("after push:" + numbers);

numbers.unshift(100); // insert in first element
console.log("after unshift:" + numbers);


let popped = numbers.pop(); // remove the last element

console.log("after pop:" + numbers);

console.log("popped element:" + popped);


let shifted = numbers.shift(); // remove the first element
console.log("after shift:" + numbers);

console.log("shift element:" + shifted);

const search = [1,2,3,4,5,6,7,8,9];
console.log(search.includes(6)); // kono element ase kina check kora
console.log(search.includes(60)); // kono element ase kina check kora


console.log(search.indexOf(8)); // 
console.log(search.indexOf(61)); 


const car = [];
const ship = "ha hadjkdn ahdke kjndkjcn"

console.log(Array.isArray(car)); // check if it is a array
console.log(Array.isArray(ship)); // check if it is a array
console.log(Array.isArray(numbers)); // check if it is a array
