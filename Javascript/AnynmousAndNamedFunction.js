var a = function fact(n) { //Named function
    if(n == 0)return 1;
    return n * fact(n - 1);
}

var b = function(n) { //Anonymous function
    if(n == 0)return 1;
    return n * b(n - 1);
}

console.log(a);
console.log(b);
console.log(a(10)); //Can be used when stack overflow happens named function fact can be used to trace
console.log(b(10)); //Function name is given by variable name