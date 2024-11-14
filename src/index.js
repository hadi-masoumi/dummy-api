const usersJSON = require("./data/users.json"); // Use require for JSON import
//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'jade');

app.get("/users", function (req, res) {
  setTimeout(() => {
    res.send(usersJSON);
  }, 2000);
});

app.get("/", function (req, res) {
  res.send('This is a dummy api');
});

app.listen(3000, function () {
  console.log("server is running on port http://localhost:" + port);
});
