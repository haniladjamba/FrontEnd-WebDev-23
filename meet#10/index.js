//learn rest operator

//rest operator
function getCity(from, to, ...through) {
    console.log("this package is from : ", from);
    console.log("is send to : ", to);
    console.log("it goes through here :", ...through);
}
getCity("manado", "makassar", "gorontalo", "parigi", "poso", "palopo"); //the first two item will be send to the from and the to parameter
//the rest of the item will be send to ...through parameter

//contoh lainnya
const penjumlahanArray = (...params) => {
    let total = 0;
    params.forEach((item) => {
    total += item;
});
console.log(total);
};
penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//spread operator
let array1 = [1, 2, 3, 4, 5];

console.log(...array1);

//more example
let array2 = [...array1];
console.log(array2);
array1.push(6);
console.log(`Array 1 = ${array1}`);
console.log(`Array 2 = ${array2}`);                                                            

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combineObj = { ...obj1, ...obj2 };