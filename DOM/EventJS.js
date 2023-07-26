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

var y = document.getElementById('Inner-Div');

y.addEventListener('mouseover', function(event){
    console.log('Inner-Div mouseover');
    event.stopPropagation();
});

var u = document.getElementById('Outer-Div');

u.addEventListener('mouseover', function(){
    console.log('Outer-Div clicked');
});
