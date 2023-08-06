var a = document.getElementsByClassName('nav-menu')[0];

for (let i of a.children) {
  let link = i.querySelector('a');
  link.addEventListener('click', function(event) {
        alert('You clicked on a link');
    });
}
