let people = ["Greg", "Mary", "Devon", "James"];

//Using a for-loop, iterate through this array and console.log all of the people.
console.log("nomor 1");
for(let i=0; i<people.length; i++) {
    console.log(people[i]);
};
console.log(" ");

//Using a forEach(),  iterate through this array and console.log all of the people.
console.log("nomor 2");
people.forEach(function (item) {
    console.log(item)
});
console.log(" ");

// Write the command to remove "Greg" from the array.
console.log("nomor 3");
people.shift();
console.log(people);
console.log(" ");

// Write the command to remove "James" from the array.
console.log("nomor 4");
people.pop();
console.log(people);
console.log(" ");
// Write the command to add "Matt" to the front of the array.
console.log("nomor 5");
people.unshift("Matt")
console.log(people);
console.log(" ");

// Write the command to add your name to the end of the array.
console.log("nomor 6");
people.push("Hani");
console.log(people);
console.log(" ");

//Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop
console.log("nomor 7");
for(let i=0; i<people.length; i++) {
    console.log(people[i]);
    if(people[i]==="Mary") break;
};
console.log(" ");

//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("nomor 8");
let newPeople = people.slice(2,4);
console.log(newPeople);
console.log(" ");

//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
console.log("nomor 9");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
console.log(" ");

//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
console.log("nomor 10");
let withBob = people.concat("Bob");
console.log(withBob);


// object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//
programming.languages.push("GO");

//
programming["difficulty"] = 7;

//
delete programming.jokes;

//
programming.isFun = true;

//
programming.languages = programming.languages.map((languages, index) => `${index} - ${languages}`);

console.log(programming);