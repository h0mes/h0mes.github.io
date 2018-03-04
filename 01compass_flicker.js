
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
    


//create arrays of possible content	
var content_home6 = ["Motor passes on the new road, behind.", "Years ago, I walked onto the porch \n with mother and father. Some wooden slats\n framed gaping holes in the floor.", "I have a video of dad\n bouncing the tenuous wooden floorboard,\n stomping to flex the beam.", " One wooden chair I could see through the back door window\n  faced me,", "facing South." ];

//set content variable to one array
var content = content_home6;
//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");
var timer = 0;

    function myOrientation(){
        //text_area.innerHTML = compassdir;

        if(compassHeading > 0 && compassHeading <=90) {
            //text_area.innerHTML = source[Math.floor(Math.random()*source.length)];
            text_area.innerHTML = "Rain this day. Some ice, actually.  The shed door creaks.";

        }
         if(compassHeading > 90 && compassHeading <=180) {
           
            timer++;
            if(timer == 15) {
            text_area.innerHTML = content_home6[Math.floor(Math.random() * content_home6.length)];
            timer = 0;
        }

        }
         if(compassHeading > 180 && compassHeading <=270) {
            text_area.innerHTML = "A story of kitchen floor holes \n left to grow \n  under a refrigerator. Bolted to the wall, \n  it would lean and lean but not fall.";
            function setup() {
                 mySound.setVolume(0.1);
                 mySound.play();
            }
      
        }
         if(compassHeading > 270 && compassHeading <=360) {
          
            text_area.innerHTML = "This one’s most recently habited.";
            
            
        }
	}


