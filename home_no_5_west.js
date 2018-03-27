var myBody = document.getElementsByTagName("body");

// function vidLoad(){
//     vid1.hide()
// }

function success() {
    myBody[0].style.backgroundColor = "#0000FF";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
    forNorth = loadSound('assets/home_no_5_west_30sec.mp3', success);
    forWest = loadSound('assets/home_no_5_west_2minute_new.mp3');
    jpg01 = loadImage('assets/home_no_5_01.jpg');
    jpg02 = loadImage('assets/home_no_5_02.jpg');
    jpg03 = loadImage('assets/home_no_5_03.jpg');
    jpg04 = loadImage('assets/home_no_5_04.jpg');
};

var text_area;
var content_home5;
var i;
var compassHeading;
var auxText;
var timer;
//var vid1;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    forNorth.setVolume(1.0);
    forWest.setVolume(1.0);
    forNorth.playMode('untilDone');
    forWest.playMode('untilDone');
    imageMode(CORNER);
    // textSize(14);
    // textAlign(LEFT, TOP);
    content_home5 = ["5.0 five", "5.1 Crows in the nearby-but-not-close, at least three", "5.2 There had been\n gabled second floor windows, green roof\n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation.", "5.3 Here, desire rots seasons clean.", "5.4 Hear a cow lowing a few miles away. \n Pickup truck passes.", "5.5 Dead grass creases stiffly under my step. ", "5.6 In summer, conquered by paradise trees, it \n grew hot and pulpy, inside \n adopting the airy nature of its verdant exterior:", "5.7 rain and snow blowing diagonal into close-set second-story eyes, \n stiff wooden body softening with time and water, iterating decay.", "5.8 In its absence, I can see across the clearing \n to where the trees start,", "5.9 facing West. "];
    auxText = ["01. This is how home number five was\n the first time I saw it. It’s a bungalow,\n a low-rise house with a veranda \nand a small loft.", "02. Here’s the home the summer after \n that last image, three years before now. \n Those are paradise trees growing up the side of it. \n They are an invasive species \n in the American Southeast. At this point \n the home had been empty \n at least 10 years. ", "03 Here it is the following winter. \n My dad texted me this when I asked him if he knew anything about it:\n  “Got signatures on petition to run for supervisor. 1996.\n Knocked on lots of doors, including that one. \nThey were carving a deer carcass on the dining room table \nin the center room. Had killed it \n and field dressed it, were cutting the meat off \n that night. Sticks in my mind… Hand saw and two or three butcher knives.\n Most people do that work outside. That’s why I remember it. “", "04 Somebody must have inherited the property\n after the man living there died, because the home had been bulldozed\n by summer of 2017.\n What you don’t see in this sporadic record is the post World War II rural-to-urban migration, \n\n where a million rural people moved to cities as a result of industrial reconversion. \n No doubt the children of this farmer were part of that migration, leaving behind a dwelling \n too simple to adapt and too cheap in construction to be worth resuscitating.", "\n05. You can’t hear it in the field recording, \n but there’s a river right on the other side of this hill.\n You can’t see it from here either.\n I found out about it from looking for this place\n on google maps, thinking that the software would have enough of a lag \nin update for me to find another final image \nof the home. The last satellite capture for this area \nwas from 2018, when the home was already gone. "];
    text_area = document.getElementById("compass_content");
    i = 0;
    timer = 0;
    // var auxText0 = JSON.stringify(auxText[0])
    // var auxText1 = JSON.stringify(auxText[1])
    // var auxText2 = JSON.stringify(auxText[2])
    // var auxText3 = JSON.stringify(auxText[3])
// vid1 = createVideo(['assets/01.mov'], vidLoad);
// var clicky = function mousePressed(){
//              i++;
//              text_area.innerHTML = auxText[i];
//              // return false;
//              if(i >= 10) {
//                i = 0; 
//              }; 
//         };

//var promise = FULLTILT.getDeviceOrientation({ 'type': 'world' });
    //promise.then(function(deviceOrientation) {
window.addEventListener('deviceorientation', function(e) {
    var alpha = e.alpha;
        if(e.webkitCompassHeading){
            compassHeading = e.webkitCompassHeading;
        } else compassHeading = 360 - alpha;
    });
};
        //deviceOrientation.listen(function() {
        //var currentOrientation = deviceOrientation.getScreenAdjustedEuler();
        //var compassHeading = 360 - currentOrientation.alpha;
        //});
        //});
    //}).catch(function(errorMessage) {
        //console.log('device orientation functions not supported :*(');



function draw(){
//North - 1min.mp3
    if(compassHeading >= 335 || compassHeading < 25){
            forNorth.play();
            text_area.innerHTML = " ";
        if(forWest.isPlaying() == true){
            forWest.stop();
        };       
    };
if(compassHeading >= 25 && compassHeading < 35){
            if(forNorth.isPlaying() == true){
            forNorth.pause();
            };
            if(forWest.isPlaying() == true){
            forWest.stop();
            };
        if (mouseIsPressed){
        text_area.innerHTML = auxText[2];
        image(jpg03, 20, 10, 700, 394);
        } else {
        text_area.innerHTML = " ";
        fill(0, 0, 255);
        noStroke();
        rect(19, 9, 701, 395);
        }; 
};
 //East by degrees - prose  
if(compassHeading >= 35 && compassHeading < 45){  
    if(forNorth.isPlaying() == true){
            forNorth.pause();
    };
    if(forWest.isPlaying() == true){
            forWest.pause();
    };
    if (mouseIsPressed){
        text_area.innerHTML = auxText[0];
        image(jpg01, 20, 10, 700, 394);
        } else {
        text_area.innerHTML =" ";
        fill(0, 0, 255);
        noStroke();
        rect(19, 9, 701, 395);
    };
};
if(compassHeading >= 45 && compassHeading < 55){
    if (mouseIsPressed){
        text_area.innerHTML = auxText[1];
        image(jpg02, 20, 10, 700, 394);
        } else {
        text_area.innerHTML = " ";
        fill(0, 0, 255);
        noStroke();
        rect(19, 9, 701, 395);
        };
};
if(compassHeading >= 55 && compassHeading < 65){
    if (mouseIsPressed){
        text_area.innerHTML = auxText[3];
        image(jpg04, 20, 10, 700, 394);
        } else {
        text_area.innerHTML = " ";
        fill(0, 0, 255);
        noStroke();
        rect(19, 9, 701, 395);
        };
};
    if(compassHeading >= 65 && compassHeading < 75) {
              text_area.innerHTML = content_home5[0];  
    };
    if(compassHeading >= 75 && compassHeading < 85) {
              text_area.innerHTML = content_home5[1];  
    };
    if(compassHeading >= 85 && compassHeading < 95) {
              text_area.innerHTML = content_home5[2];  
    };
    if(compassHeading >= 95 && compassHeading < 105) {
              text_area.innerHTML = content_home5[3];  
    };
    if(compassHeading >= 105 && compassHeading < 115) {
        text_area.innerHTML = content_home5[4];
    };
    if(compassHeading >= 115 && compassHeading < 125) {
        text_area.innerHTML = content_home5[5];
    };
//South poem by degrees
    if(compassHeading >= 125 && compassHeading < 135) {
        text_area.innerHTML = content_home5[6];    
    };
    if(compassHeading >= 135 && compassHeading < 145) {
        text_area.innerHTML = content_home5[7];
    };
    if(compassHeading >= 145 && compassHeading < 155) {
        text_area.innerHTML = content_home5[8];
    };
    if(compassHeading >= 155 && compassHeading < 165) {
        text_area.innerHTML = content_home5[9];
        if(forWest.isPlaying() == true){
            forWest.stop();
        };
        if(forNorth.isPlaying() == true){
            forNorth.pause();
        }; 
    };

//West forWest.mp3(2minutes)
    if(compassHeading >= 235 && compassHeading < 335) {
        forWest.play();
        timer=0
        timer++;
        if(timer % 60 == 0){
            i++;
        }
        if(i >= forWest.duration()){
            forWest.stop();
        }
    if (mouseIsPressed){
        text_area.innerHTML = auxText[4];
        image(jpg04, 20, 10, 700, 394);
        } else {
        text_area.innerHTML = " ";
        fill(0, 0, 255);
        noStroke();
        rect(19, 9, 701, 395);
        };
        if(forNorth.isPlaying() == true){
            forNorth.pause();
        };
    };
};

