var express = require("express");

var app = express();

var port = 8000;

var bp = require("body-parser");

var path = require("path");

var session = require("express-session");

app.use(bp.urlencoded());

app.use(express.static(path.join(__dirname,'/client')));

app.use(session({secret: "cat"}));

app.set("views", path.join(__dirname, "/views"));

app.set("view.engine", "ejs");

app.get("/", function(req, res){

});

app.listen(port, function(){
    console.log("listening");
})