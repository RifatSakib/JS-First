/*
ternary --> three parts
?  :

condition ? do something when true : do something when false

*/

const age = 12;
// if(age >= 18){
//     console.log("you can vote");

// }

// else{
//     console.log("you cannt vote");
// }

// simple ternary
age >= 18 ? console.log("vote Dio") : console.log("vote dio na");


let price = 500;
const isLeader = false;

// if (isLeader === true ) {
//    price =0;

// }
// else {
//     price = price + 100;

// }

// console.log(price);



price = isLeader === true ? 0 : price + 100; 

console.log(price);


 

// if (isLeader === true){
//     if(price > 1000) {
//         price = price/2;
//     }
//     else{
//         price = 0;
//     }
// }

// else {
//     price = price + 1000;
// }



// semi ternary //

// not organised
// price = isLeader === true ? price> 100 ?  price/2 : 0 : price + 1000 ;




//organised but same
        price = isLeader === true ? 
                        price> 100 ?
                            price/2 : 0
            : price + 1000 ;

    console.log(price);


    console.log(6 != 6);