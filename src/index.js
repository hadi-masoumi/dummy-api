const usersJSON = require("./data/users.json"); // Use require for JSON import
//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'jade');

//post route for adding new task
app.get("/users", function (req, res) {
  setTimeout(() => {
    res.send(usersJSON);
  }, 2000);
});

//render the ejs and display added task, completed task
app.get("/", function (req, res) {
  res.render("index", {task: task, complete: complete});
});

//set app to listen on port 3000
app.listen(3000, function () {
  console.log("server is running on port http://localhost:" + port);
});
