var myBody = document.getElementsByTagName("body");

function success() {
    myBody[0].style.backgroundColor = "#000000";
    console.log("hiiiii");
}

function preload() {
 soundFormats('mp3', 'ogg');
  forSouth = loadSound('assets/ssss.ogg', success);
 forEast = loadSound('assets/ssss.ogg');
}

var timer;
var text_area;
var content_home5;
var content;
var i;

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
}

function draw() {
 // background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
 /* fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, height/2)*/
  

  if(compassHeading >= 135 && compassHeading < 225) {
        forSouth.play();
    }

//East forEast.ogg
    if(compassHeading >= 45 && compassHeading < 135) {
        forEast.play();
    }   
 //West flicker       
    if(compassHeading >= 225 && compassHeading < 315) {
        timer++;
        if(timer % 20 == 0) {
            i++
            if(i >= content_home5.length) {
              i = 0;  
            } 
        }
        text_area.innerHTML = content_home5[i];
    }

}


window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = alpha;
        }
});

