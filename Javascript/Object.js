var a = {}; //Creating an empty object

var student = {   //Creating a new object
    name:'Swagat',
    rollno : 21103149,
    marks: 100
};

console.log(student);
student.marks =  0;
console.log(student);
console.log(student.name);

console.log(student.sem);
student.sem = 5;
console.log(student);

var c = new Object();

c = {
    "-name" : "Swagat",
    "Sem" : 5,
    "marks" : 5
}

console.log(c);
// console.log(c.-name); Will Give Error

// But in Case of Sqaure Bracket Notation
console.log(c["-name"]); //It will print the values or for numerical type key or number in string also

//Dynamic printing
function p(obj,prop){
    console.log(obj[prop]);
}

p(c,"-name"); //We don't know in the function which property will be passed

//Deleting a property from object

delete c["-name"]; //Deleting using square bracket notation
console.log(c);
delete c.marks //Deleting using . notation
console.log(c);

// Iterating over the objects
for(var a in student){  //Printing the keys of the object
    console.log(a);
}

for(var a in student){ //Printing Values along with keys
    console.log(a,student[a]);
}

var c = Object.keys(student);
console.log(c);

//Similar Fuction
var z = Object.getOwnPropertyNames(student);
console.log(z);

//Nested Objects
var student = {
    "name": "Swagat",
    rollno: 135,
    marks:90,
    address: {
        city : "Delhi",
        pincode: 110010
    }
};

// console.log(student);
// console.log(student.address);
console.log(student.address["city"]); //using dot and square simulataneously
