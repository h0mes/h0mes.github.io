var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
  forSouth = loadSound('assets/home_no_5_west96k_forSouth.mp3', success);
 forEast = loadSound('assets/home_no_5_west96k_forEast.mp3');
}

var timer;
var text_area;
var content_home5;
var content;
var i;
var compassHeading;

function setup() {
    forSouth.setVolume(0.6);
    forEast.setVolume(0.6);
    forSouth.playMode('untilDone');
    forEast.playMode('untilDone');
content_home5 = ["5.0 five", "5.1 Crows in the nearby-but-not-close, at least three", "5.2 There had been\n gabled second floor windows, green roof\n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation.", "5.3 Here, desire rots seasons clean.", "5.4 Hear a cow lowing a few miles away. \n Pickup truck passes.", "5.5 Dead grass creases stiffly under my step. ", "5.6 In summer, conquered by paradise trees, it \n grew hot and pulpy, inside \n adopting the airy nature of its verdant exterior:", "5.7 rain and snow blowing diagonal into close-set second-story eyes, \n stiff wooden body softening with time and water, iterating decay.", "5.8 In its absence, I can see across the clearing \n to where the trees start,", "5.9 facing West. "];
content = content_home5;
text_area = document.getElementById("compass_content");
timer = 0
i = 0

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

//function draw(){
//text_area.innerHTML = compassHeading;
//South forSouth.ogg 
    if(compassHeading >= 135 && compassHeading < 225) {
        forSouth.play();
        if(forEast.isPlaying() == true){
            forEast.stop()
            text_area.innerHTML = " "
        }
    }

//East forEast.ogg
    if(compassHeading >= 45 && compassHeading < 135) {
        forEast.play();
        if(forSouth.isPlaying() == true){
            forSouth.stop()
            text_area.innerHTML = " "
        }
    } 

 //West by degrees      
    if(compassHeading >= 225 && compassHeading < 325) {
        i++
        text_area.innerHTML = content_home5[i];
        // function mousePressed(){
        //     i++
        //     text_area.innerHTML = content_home5[i];
        //     return false;
        //     if(i >= 10) {
        //       i = 0; 
        //     } 
        // }  
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }
    // if(compassHeading >= 235 && compassHeading < 245) {
    //     text_area.innerHTML = content_home5[1];
    // }
    // if(compassHeading >= 245 && compassHeading < 255) {
    //     text_area.innerHTML = content_home5[2];
    // }
    // if(compassHeading >= 255 && compassHeading < 265) {
    //     text_area.innerHTML = content_home5[3];
    // }
    // if(compassHeading >= 265 && compassHeading < 275) {
    //     text_area.innerHTML = content_home5[4];
    // }
    // if(compassHeading >= 275 && compassHeading < 285) {
    //     text_area.innerHTML = content_home5[5];
    // }
    // if(compassHeading >= 285 && compassHeading < 295) {
    //     text_area.innerHTML = content_home5[6];
    // }
    // if(compassHeading >= 295 && compassHeading < 305) {
    //     text_area.innerHTML = content_home5[7];
    // }
    // if(compassHeading >= 305 && compassHeading < 315) {
    //     text_area.innerHTML = content_home5[8];
    // }
    // if(compassHeading >= 315 && compassHeading < 325) {
    //     text_area.innerHTML = content_home5[9];
    //     if(forEast.isPlaying() == true){
    //         forEast.stop()
    //     }
    //     if(forSouth.isPlaying() == true){
    //         forSouth.stop()
    //     }
    // }

//north
    if(compassHeading >= 325 || compassHeading < 45){
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
        text_area.innerHTML = " "
    }
//}

