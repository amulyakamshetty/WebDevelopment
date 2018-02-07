var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingvar : thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title:"Malgudi Days", author:"RK Narayanan"},
        {title:"Wuthering Heights", author:"Jane Austen"},
        {title:"Inferno", author:"Dan Brown"}
        ];
        
    res.render("posts" , {posts : posts});
});


app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("Server is listening");
})