//variable
//learning let and const

//let
//can be override
let fName = "hani";
let lName = "ladjamba";
console.log(fName + " " + lName);

//const
//cant be override
const gender = "male";
gender = "famale"; //this line will create an error

//operators
let num = 1;
num += 1;
num++;
console.log(num);

//function
function getFullName(depan, belakang) {
    const fullName = depan + " " + belakang;
    return fullName;
}

const result = getFullName("john", "doe");
console.log(result);