let a = document.getElementById('Generate-Image');

let NASA = ()=>{
    let req = new XMLHttpRequest();
    req.onload = ()=>{
        let parent = document.getElementById('Image-To-Be');
        let response = JSON.parse(req.response);
        console.log(response);
        let image = document.createElement('img');
        image.setAttribute('src',response.url);
        parent.appendChild(image);
    }
    req.open('get','https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',true);
    req.send();
}

a.addEventListener('click',NASA);