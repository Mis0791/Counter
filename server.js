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

app.get("/count", function(req, res){

    if(!req.session.count){
        req.session.count = 0
    }
    res.render("count.ejs", {count: req.session.count})
    
});

app.get("/add1", function(req, res){
    req.session.count += 1
    res.redirect("/count")
})

app.listen(port, function(){
    console.log("listening");
})