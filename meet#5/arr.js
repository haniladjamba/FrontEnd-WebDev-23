//array literal
const john = ['John', 'doe', 33, true];

//array new
// let buah = new Array['manggo', 'banana'];

//index array
const num = [0,1,2,3];


//hapus elemen
//pop
john.pop();
//shift
john.shift();

//tambah elemen
//push
john.push('bb');
//unshift
john.unshift('aa');
//splice
john.splice(3, 0, true);
//slice
let baru = john.slice(1,3);

john[0] ='not';
console.log(john[1]);
console.log(john.length - 1);

console.log(john.toString());
console.log(john.join("..."));