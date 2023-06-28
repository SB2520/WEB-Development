function outer() {
    inner();
    function inner(){
        console.log('inner');
    }
    console.log('outer');
}

// Calling inner function will give error due to scope
// inner();

outer();