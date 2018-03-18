
function preload() {
  soundFormats('mp3', 'ogg');
  forSouth = loadSound('assets/home_no_5_west96k_forSouth.ogg');
  forEast = loadSound('assets/home_no_5_west96k_forEast.ogg');
}
//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = e.alpha;
        }
    
        //calls function to alter content based on heading
        myOrientation();
    }

//device orientation listener calls oriented function when heading changes
	window.addEventListener('deviceorientation', oriented, false);



function setup() {
    forSouth.setVolume(0.6);
    forEast.setVolume(0.6);
    forSouth.playMode('untilDone')
    forEast.playMode('untilDone')
var content_home5 = ["5.0 five", "5.1 Crows in the nearby-but-not-close, at least three", "5.2 There had been\n gabled second floor windows, green roof\n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation.", "5.3 Here, desire rots seasons clean.", "5.4 Hear a cow lowing a few miles away. \n Pickup truck passes.", "5.5 Dead grass creases stiffly under my step. ", "5.6 In summer, conquered by paradise trees, it \n grew hot and pulpy, inside \n adopting the airy nature of its verdant exterior:", "5.7 rain and snow blowing diagonal into close-set second-story eyes, \n stiff wooden body softening with time and water, iterating decay.", "5.8 In its absence, I can see across the clearing \n to where the trees start,", "5.9 facing West. "];
var content = content_home5;
var text_area = document.getElementById("compass_content");
var timer = 0
var i = 0
}


function myOrientation(){
        //text_area.innerHTML = compassdir;
        //South forSouth.ogg 
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
        if(timer % 20 = 0) {
            i++
        }
        text_area.innerHTML = content_home5[i];
    }
}


