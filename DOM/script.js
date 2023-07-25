function say(){
    alert('Hello world');
}
var hellob  = document.getElementById('btn');
hellob.addEventListener('click',say);
hellob.addEventListener('click',function(){
    alert('Bye!');
});