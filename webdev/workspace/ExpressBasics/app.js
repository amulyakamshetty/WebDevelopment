console.log("Server has started !");
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there ! Welcome to my Assignment");
});

app.get("/speak/:animal", function(req,res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        cow : "Mooo",
        dog : "Woof Woof",
        pig : "Oink",
        goldfish : "...",
        cat : "Meow"
    }
    
    var sound = sounds[animal];
    
    res.send("the " + animal + " says " + sound);
    

});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word;
    var number = Number(req.params.number);
    //res.send(" word = " + word + " times = " + number);
    var result = " ";
     
    for(var i = 0; i < number; i++){
      result += word + " ";
      //console.log(result);
     }
     res.send(result + " ");
});

app.get("*", function(req, res) {
    res.send("link not found")
});

app.listen(process.env.PORT, process.env.IP,function(req,res){
    console.log("now serving your app");
});

