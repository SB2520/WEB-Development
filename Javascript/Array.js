//Defining the variables
var a = [1,2,3,5];
console.log(a[7]);

//Defining the empty array
var b = new Array();

//Defining an empty size array of length 5
var c = new Array(5);

//Defining an empty array of lenght 20
var d = new Array(20);

//Defining an array of natural number from 1 to 10
var e = new Array(1,2,3,4,5,6,7,8,9,10);

e[12] = 56; //We can do this
console.log(e);

// Defining array of variable data types
var z = new Array('Swagat',3,9.9,true,Infinity);

console.log(z);
console.log(z.length); //length of array

z.push(2);
console.log(z);
z.pop();
console.log(z);

var c = [20,30,40];
console.log(c.length);
console.log(c);
c.prop1 = "Demo";
console.log(c.length);
console.log(c);
c[10] = 1;
console.log(c.length);

//Iterationg over arrays
for(var i in c){ //Itereting over values
    console.log(c[i]);
}

for(var i in c){ //Itereting over keys
    console.log(i);
}