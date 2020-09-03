var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8080;
var app = express();

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(__dirname + "/public"))
  .use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
