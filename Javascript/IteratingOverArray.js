var arr = [1,2,3,4];
for(var i=0; i<arr.length; i++){ //for loop
    console.log(arr[i]);
}

//For each method 
function print(element){
    console.log(element);
}

arr.forEach(print);