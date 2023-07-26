var i = document.getElementById('Inner-Div');

i.addEventListener('click', function(){
    alert('Inner-Div clicked');
});

var z = document.getElementById('Outer-Div');

z.addEventListener('click', function(){
    alert('Outer-Div clicked');
});

var x = document;

x.addEventListener('click', function(){
    alert('document clicked');
});