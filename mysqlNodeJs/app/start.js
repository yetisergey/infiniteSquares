var express = require("express");
//var bodyParser = require('body-parser');
var hbs = require("hbs");
var context = require("./context");
var app = express();
app.use(express.static("./app/public"));
app.set("views", __dirname + "\\views");
app.set("view engine", "hbs");
app.set("view options", { layout: "./shared/_layout" });

//app.use(bodyParser.json());
// app.post('/api/createProject', (req, res) => {
//     context
//         .createProject({
//             Name: req.body.Name,
//             Description: req.body.Description
//         })
//         .then(() => res.sendStatus(200));
// })

app.get("/", function(req, res) {
  try {
    res.render("main", { title: "Главная!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen("3000", function() {
  console.log("Web Server Start on http://localhost:3000");
});
