var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name : String,
    age : Number,
    temparament : String
});

var Cat = mongoose.model("Cat", catSchema);

// var henry = new Cat({
//     name : "Edward",
//     age : 7,
//     temparament : "grouchy"
//     });
    
//     henry.save(function(err, cat){
//         if(err){
//         console.log("something went wrong");
//         } else {
//             console.log("we just added a cat to the db");
//             console.log(cat);
//         }
//     });

Cat.create({
    name : "Lily",
    age : 10,
    temparament : "Cute"
}, function(err,cat){
    if(err){
        console.log("error error");
    } else {
        console.log("YAYYYY");
        console.log(cat);
    }
});
   
Cat.find({}, function(err,cats){
    if(err){
        console.log("errorrr..");
    } else {
        console.log("all the cats...");
        console.log(cats);
    }
})
    