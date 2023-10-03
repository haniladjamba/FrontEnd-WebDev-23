// IIFE function
const num = 2;
const hasil =(function (param){
    let isEligible = param % 2==0 ? "angka yang dimasukan adalah genap" : "angka yang dimasukan adalah ganjil";
    return isEligible;
})(num);

console.log(hasil);


