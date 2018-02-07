function average(scores){
    var sum = 0;
    scores.forEach(function(score){
        sum += score;
    })
    var avg = sum / scores.length;
    console.log(Math.round(avg));
    
}

var scr = [90,98,89,100,100,86,94];
average(scr);

var scr2 = [40,65,77,82,80,54,73,63,95,49];
average(scr2);