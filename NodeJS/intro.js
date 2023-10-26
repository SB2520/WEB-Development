console.log("Hello NodeJS");

let sum = (a,b) =>{
    return a+b;
}

//process is a global class like 
console.log(process.argv);
//It takes value from terminal also
//Its first 2 values are fixes 
//1st is the path where the node packages are installed 
//2nd one is where the file is located path

let a = process.argv.slice(2);
console.log(sum(parseInt(a[0]),parseInt(a[1]))); 