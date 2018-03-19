
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
    
//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");

    function myOrientation(){
        //text_area.innerHTML = compassdir;
         //NORTHWEST h0me no. 1
    //     if(compassHeading >= 323 && compassHeading < 332) {
    //          text_area.innerHTML = "1.0 one";
    // }   
    //     if(compassHeading >= 332 && compassHeading < 341) {
    //          text_area.innerHTML = "1.1 indurated, fading earthward faces outwards right up against tremendous velocity:  ";
    // }   
    //     if(compassHeading >= 341 && compassHeading < 350) {
    //          text_area.innerHTML = "1.2 100 years of holding tilts it \n 10 degrees into earth. soft \n mossed-over steps lead to the side door. \n Front stairs chipped off, muted.";
    // }   
    //     if(compassHeading >= 350 && compassHeading < 359) {
    //          text_area.innerHTML = "1.3 Rotting floorboards would cocoon footsteps.";
    // }
        //NORTH
        if(compassHeading >= 0 && compassHeading < 36) {
             text_area.innerHTML = "5.0 five";
    }   
        
        if(compassHeading >= 36 && compassHeading < 72) {
             text_area.innerHTML = "5.1 Crows in the nearby-but-not-close, at least three";
    }
        
        if(compassHeading >= 72 && compassHeading < 108) {
             text_area.innerHTML = "5.2 There had been\n gabled second floor windows, green roof\n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation.";
    }
        
        if(compassHeading >= 108 && compassHeading < 144) {
             text_area.innerHTML = "5.3 Here, desire rots seasons clean.";
    }

        if(compassHeading >=144 && compassHeading < 180) {
             text_area.innerHTML = "5.4 Hear a cow lowing a few miles away. \n Pickup truck passes.";
    }

        if(compassHeading >= 180 && compassHeading < 216) {
             text_area.innerHTML = "5.5 Dead grass creases stiffly under my step. ";
    }
         if(compassHeading >= 216 && compassHeading < 252) {
             text_area.innerHTML = "5.6 In summer, conquered by paradise trees, it \n grew hot and pulpy, inside \n adopting the airy nature of its verdant exterior:";
    }
        if(compassHeading >= 252 && compassHeading < 288) {
             text_area.innerHTML = "5.7 rain and snow blowing diagonal into close-set second-story eyes, \n stiff wooden body softening with time and water, iterating decay.";
    }

        if(compassHeading >= 288 && compassHeading < 324) {
             text_area.innerHTML = "5.8 In its absence, I can see across the clearing \n to where the trees start,";
    }        

        if(compassHeading >= 324 && compassHeading < 359) {
             text_area.innerHTML = "5.9 facing West. ";
    }

	}


