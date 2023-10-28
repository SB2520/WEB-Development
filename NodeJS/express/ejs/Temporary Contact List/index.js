const express = require("express");
const path = require("path");
const port = process.env.port || 3000;
let app = express();
//Setting up the view engine
app.set("view engine", "ejs");

//Joing the views with the path
app.set("views", path.join(__dirname, "views"));

//accesing the static files
app.use(express.urlencoded());
app.use(express.static('assests'));

let arr = [
  {
    name: "Swagat",
    phone: 992321394,
  },
  {
    name: "Aryan",
    phone: 882313132,
  }
];

app.get("/", (req, res) => {
  return res.render("index", {
    title: "Home",
  });
});

app.get("/contact", (req, res) => {

  return res.render("contact", {
    title: "Contacts",
    contactlist: arr,
  });
});

app.post('/swagat',(req,res)=>{
    arr.push(req.body);
    return res.redirect('/')
});

app.listen(port, (err) => {
  if (err) {
    console.log(err.name);
    throw err;
    return;
  }
  console.log(`listening at port no ${port}`);
});
