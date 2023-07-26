var p = document.getElementsByClassName('cont')[0];

p.addEventListener('mouseover', function(){
    console.log('MouseOver');
});

p.addEventListener('mouseout', function(){
    console.log('MouseOut');
});

var z = document.getElementById('Swagat');

z.addEventListener('keypress', function(){
    console.log('Keypress');
});

var s = document.getElementById('Swagat');

s.addEventListener('keydown', function(event){
    console.log('KeyDown', event.code);
});

var l = document.getElementById('Swagat');

l.addEventListener('keydown', function(event){
    console.log('KeyDown', event.keyCode);
});