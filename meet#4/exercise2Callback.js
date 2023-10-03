//callback function
function display(some) {
    console.log(some);
}
  
function determine(num, Callback) {
    let isEligible = num % 2==0 ? "angka yang dimasukan adalah genap" : "angka yang dimasukan adalah ganjil";
    Callback(isEligible);
}
  
determine(14, display);