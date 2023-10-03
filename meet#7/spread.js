//Materi penting
//Materi penting
let arr = [1,2,3,4];

// console.log(arr);
// console.log(...arr);

//duplikasi array
// let arr2 = arr; //salah karena hanya copy alamat saja
let arr2 = [];
arr2.push(...arr);
arr.push(3);
console.log(arr);
console.log(arr2);

//menggabung array
let arry1 = [1,2];
let arry2 = [1,1];
let arry3 = [2,3];

// let combine = arry1.concat(arry2, arry3); //cara lama
let combine = [...arry1,4,...arry2,...arry3];
console.log(combine);

//object
let person = {
    name:"john",
    age:22,
    adress:"canada"
}

let person2 = {
    name2:"luna",
    age2:20,
    adress2:"canada"
}

//add new prop
function student( ...john) {
    const person = { ...john, teacher: "gg"}
}
//concat obj
const comb = {...person, ...person2}
console.log(comb.name, comb.name2);