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

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = alpha;
        }
    });

}



function draw(){
        //text_area.innerHTML = compassdir;
        //South forSouth.ogg 
    if(compassHeading >= 135 && compassHeading < 225) {
        forSouth.play();
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
    }

//East forEast.ogg
    if(compassHeading >= 45 && compassHeading < 135) {
        forEast.play();
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }   
 //West flicker       
    if(compassHeading >= 225 && compassHeading < 315) {
        timer++;
        if(timer % 20 == 0) {
            i++
            text_area.innerHTML = content_home5[i];
            if(i >= content_home5.length) {
              i = 0;  
            } 
        }
        text_area.innerHTML = content_home5[i];

        if(forEast.isPlaying() == true){
            forEast.stop()
        }if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }
    //north
    if(compassHeading >= 315 || compassHeading < 45){
        if(forEast.isPlaying() == true){
            forEast.stop()
        }
        if(forSouth.isPlaying() == true){
            forSouth.stop()
        }
    }



