let john = {fName:"john", lName:"doe",
 isMarried:true, 
 age:33, 
 grade:[90,90,22], 
 adress: {city:"manado", prov:"sulut"}, 
 saySmth: function() {
    console.log("olla" + this.fName);
 }
};

//acces elemen
//dot
console.log(john.fName);
console.log(john.adress.city);
console.log(john.saySmth());
//bracket
console.log(john['grade'][2]);
console.log(john['saySmth']());

//arr obb (json)
let students = [
    {id:2},
    {id:3},
    {id:4}
]
//foreach
students.forEach(function (item) {
    console.log(item.id);
}); 
//map
let arrBaru = students.map(function (item) {
    console.log(item.id);
    return item.id;
}); 
console.log(arrBaru);

//filter
let arrBaru2 = students.filter(function (item) {
    return item.id===3;
}); 
console.log(arrBaru2);

//find
let arrBaru3 = students.filter(function (item) {
    return item.id===4;
}); 
console.log(arrBaru2);