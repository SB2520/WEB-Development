let fetch = document.getElementById('button');

let fetchdogphoto = ()=>{
    var xhrReq = new XMLHttpRequest();
    
    //on receiving the resposne
    xhrReq.onload = ()=>{
        console.log(xhrReq.response);
        let a = JSON.parse(xhrReq.response);
        let imageurl = a.message;
        let image = document.getElementById('image');
        image.setAttribute('src',imageurl);
    };
    //The boolean value is passed which is default true:- Async And for making it sync its false which we need to pass explicitly
    xhrReq.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrReq.send();
}

fetch.addEventListener('click',fetchdogphoto);