var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
  forSouth = loadSound('assets/home_no_5_west96k_forSouth.mp3', success);
 forEast = loadSound('assets/home_no_5_west_forEast.mp3');
}

var text_area;
var content_home5;
var i;
var compassHeading;
var auxText = [];

function setup() {
    forSouth.setVolume(0.6);
    forEast.setVolume(0.6);
    forSouth.playMode('untilDone');
    forEast.playMode('untilDone');
content_home5 = ["5.0 five", "5.1 Crows in the nearby-but-not-close, at least three", "5.2 There had been\n gabled second floor windows, green roof\n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation.", "5.3 Here, desire rots seasons clean.", "5.4 Hear a cow lowing a few miles away. \n Pickup truck passes.", "5.5 Dead grass creases stiffly under my step. ", "5.6 In summer, conquered by paradise trees, it \n grew hot and pulpy, inside \n adopting the airy nature of its verdant exterior:", "5.7 rain and snow blowing diagonal into close-set second-story eyes, \n stiff wooden body softening with time and water, iterating decay.", "5.8 In its absence, I can see across the clearing \n to where the trees start,", "5.9 facing West. "];
auxText = ["01.mov: This is how home number five was the first time I saw it. It’s a bungalow, a low-rise house with a veranda and a small loft. The word bungalow comes from the Hindi word for “Bengali,”  the people of Bangladesh, where this architectural style originated in the 15th century. The person who owned this house probably wasn’t aware of its etymology. ", "02.mov Here’s the home the summer after that last image, three years before now. Those are paradise trees growing up the side of it. They are an invasive species in the American Southeast. At this point the home had been empty at least 10 years. ", "03.mov Here it is the following winter. My dad texted me this when I asked him if he knew anything about it: “Got signatures on petition to run for supervisor. 1996. Knocked on lots of doors, including that one. They were carving a deer carcass on the dining room table in the center room. Had killed it and field dressed it, were cutting the meat off that night. Sticks in my mind… Hand saw and two or three butcher knives. Most people do that work outside. That’s why I remember it. “", "04.mov Somebody must have inherited the property after the man living there died, because the home had been bulldozed by summer of 2017. \n What you don’t see in this sporadic record is the massive rural-to-urban migration that took place after the second world war, where a million civilians moved from farms to cities as a result of industrial reconversion. No doubt the children of this farmer where part of that migration, leaving behind a dwelling too simple to adapt and too cheap in construction to be worth resuscitating. \nYou can’t hear it in the field recording, but there’s a river right on the other side of this hill. You can’t see it from here either. I found out about it from looking for this place on google maps, thinking that the software would have enough of a lag in update for me to find another final image of the home. The last satellite capture for this area was from 2018, when the home was already gone. "];
text_area = document.getElementById("compass_content");
i = 0
var clicky = function mousePressed(){
             i++;
             text_area.innerHTML = auxText[i];
             return false;
             if(i >= 10) {
               i = 0; 
             } 
        };

//var promise = FULLTILT.getDeviceOrientation({ 'type': 'world' });
    //promise.then(function(deviceOrientation) {
window.addEventListener('deviceorientation', function(e) {
    var alpha = e.alpha;
        if(e.webkitCompassHeading){
            //compassHeading = e.webkitCompassHeading;
            compassHeading = alpha;
        }
    });
} 
        //deviceOrientation.listen(function() {
        //var currentOrientation = deviceOrientation.getScreenAdjustedEuler();
        //var compassHeading = 360 - currentOrientation.alpha;
        //});
        //});
    //}).catch(function(errorMessage) {
        //console.log('device orientation functions not supported :*(');

function draw(){
//text_area.innerHTML = compassHeading;
//South forSouth.ogg 
    if(compassHeading >= 145 && compassHeading < 225) {
        forSouth.play();
        if(forEast.isPlaying() == true){
            forEast.stop()
            text_area.innerHTML = " "
        }
    }

//"East" actually west forEast.mp3(2minutes)
    if(compassHeading >= 225 && compassHeading < 335) {
        forEast.play();
        if(forSouth.isPlaying() == true){
            forSouth.stop()
            text_area.innerHTML = " "
        }
    } 

 //"West"  actually east by degrees      
    if(compassHeading >= 45 && compassHeading < 55) {
        //i++
        text_area.innerHTML = content_home5[0]; 
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }
    if(compassHeading >= 55 && compassHeading < 65) {
        text_area.innerHTML = content_home5[9];
    }
    if(compassHeading >= 65 && compassHeading < 75) {
        text_area.innerHTML = content_home5[8];
    }
    if(compassHeading >= 75 && compassHeading < 85) {
        text_area.innerHTML = content_home5[7];
    }
    if(compassHeading >= 85 && compassHeading < 95) {
        text_area.innerHTML = content_home5[6];
    }
    if(compassHeading >= 95 && compassHeading < 105) {
        text_area.innerHTML = content_home5[5];
    }
    if(compassHeading >= 105 && compassHeading < 115) {
        text_area.innerHTML = content_home5[4];
    }
    if(compassHeading >= 115 && compassHeading < 125) {
        text_area.innerHTML = content_home5[1];
    }
    if(compassHeading >= 125 && compassHeading < 135) {
        text_area.innerHTML = content_home5[2];
    }
    if(compassHeading >= 135 && compassHeading < 145) {
        text_area.innerHTML = content_home5[3];
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }

//north
    if(compassHeading >= 335 || compassHeading < 45){
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
        clicky();
        text_area.innerHTML = auxText[i]
    }
}

