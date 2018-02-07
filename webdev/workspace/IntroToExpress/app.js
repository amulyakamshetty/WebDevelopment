console.log ("server has started");
var express = require("express");
var app = express();

//routes
// "/" --> "hi there!""
app.get("/" , function(req, res){
    res.send("Hi There !!!");
})
// "/bye" --> "goodbye"
app.get("/bye", function(req, res){
    res.send("Goodbye!!!");
})

// "/dogs" --> "bow bow"
app.get("/dogs", function(req, res){
    res.send("Bow Bow !!");
})

//route params
app.get("/r/:anyparam", function(req, res) {
    var parameter = req.params.anyparam;
    res.send("you gave " + parameter + " in your link");
})

//* route
app.get("*", function(req, res) {
    res.send("CANNOT GET the link requested")
})

app.listen(process.env.PORT, process.env.IP);


