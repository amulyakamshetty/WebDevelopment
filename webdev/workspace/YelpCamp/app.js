var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//SCHEMA Setup
var campgroundSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//     name : "Charleston",
//     image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg",
//     description : "The most beautiful campround in North Carolina. Ziplining, Kayaking, River rafting availabe. For a fun filled holiday."
//     }, function(err, campground){
//     if(err){
//         console.log(err); 
//     } else {
//         console.log(campground);
//     }
// })

app.get("/", function(req,res){
    res.render("landing");
});

 var campgrounds = [
    { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },  
    { name : "Myrtle" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },  
    { name : "Smokeys" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
    { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
    { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
    { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
    { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
     { name : "Charleston" , image : "https://media.pitchup.co.uk/images/2/image/private/s--ZvZFqf-0--/c_fill,h_240,w_320/e_improve,fl_progressive/q_jpegmini/v1382517234/camping-le-repaire/xcamping-le-repaire-electric-grass-pitch-pitch-for-the-small-tent.jpg.pagespeed.ic.b7D3_h9ZFS.jpg" },
    ];


app.get("/campgrounds", function(req,res){
    // res.render("campgrounds", {campgrounds : campgrounds});
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds : allcampgrounds});
        }
    });
});
   
   


app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name : name, image : image, description : description };
    //campgrounds.push(newCampground);
    Campground.create(newCampground, function(err,campground){
        if (err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    })
    //res.redirect("/campgrounds")
});


app.get("/campgrounds/new", function(req,res){
    res.render("new");
});


app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err){
            console.log(err);
        } else {
           res.render("show", {campground : foundCampground}); 
        }
    })
    
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started !");
    
});