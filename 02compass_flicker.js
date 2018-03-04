
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

    function myOrientation(){
        //text_area.innerHTML = compassdir;
         //NORTHWEST h0me no. 1
        if(compassHeading >= 323 && compassHeading < 332) {
             text_area.innerHTML = "1.0 one";
    }   
        if(compassHeading >= 332 && compassHeading < 341) {
             text_area.innerHTML = "1.1 indurated, fading earthward faces outwards right up against tremendous velocity:  ";
    }   
        if(compassHeading >= 341 && compassHeading < 350) {
             text_area.innerHTML = "1.2 100 years of holding tilts it \n 10 degrees into earth. soft \n mossed-over steps lead to the side door. \n Front stairs chipped off, muted.";
    }   
        if(compassHeading >= 350 && compassHeading < 359) {
             text_area.innerHTML = "1.3 Mushy wooden floors don’t creak.";
    }
        //NORTH
        if(compassHeading >= 359 || compassHeading < 8) {
             text_area.innerHTML = "1.4 endless whine of motors \n kinetic anxiety of wheels";
    }   
        
        if(compassHeading >= 8 && compassHeading < 17) {
             text_area.innerHTML = "1.5 Machines struggle to round the uphill curve.";
    }
        
        if(compassHeading >= 17 && compassHeading < 26) {
             text_area.innerHTML = "1.6 Two sisters lived here back in my childhood. \n Grinning, toothless, white hairs sprouted from \ntheir doughy chins, round and soft.";
    }
        
        if(compassHeading >= 26 && compassHeading < 35) {
             text_area.innerHTML = "1.7 They were ancient, even then.\n Their long skirts and small steps  \nmoving slowly, voices crackling with delight.";
    }

        if(compassHeading >= 35 && compassHeading < 44) {
             text_area.innerHTML = "1.8 Cars just fly past, rounding \nthe gap in the mountain where weather changes,";
    }
    //NORTHEAST
        if(compassHeading >= 44 && compassHeading < 53) {
             text_area.innerHTML = "1.9 headed East.";
    }
    //h0me no. 4
        if(compassHeading >= 53 && compassHeading < 62) {
             text_area.innerHTML = "4.0 four";
    }

        if(compassHeading >= 53 && compassHeading < 62) {
             text_area.innerHTML = "4.1 A tension that draws shoulderblades together contracts cold and static.";
    }        

        if(compassHeading >= 62 && compassHeading < 71) {
             text_area.innerHTML = "4.2 The only sign \n of a recent wildness \n a gutter suspended over the front porch \n like a false lash come unglued from a pale eyelid";
    }

        if(compassHeading >= 71 && compassHeading < 80) {
             text_area.innerHTML = "4.3 Up the gravel road, a car";
    }

        if(compassHeading >= 80 && compassHeading < 89) {
             text_area.innerHTML = "4.4 I hear while standing there. \n Tiny bird";
    }
        //EAST
        if(compassHeading >= 89 && compassHeading < 98) {
             text_area.innerHTML = "4.5 illuminated in bare light of gray sky.";
    }

        if(compassHeading >= 98 && compassHeading < 107) {
             text_area.innerHTML = "4.6 One summer, years ago, \n I walked here not alone. \n We hiked up through briars to peek in the side window.";
    }

        if(compassHeading >= 107 && compassHeading < 116) {
             text_area.innerHTML = "4.7 thousand insects stuck to warped glass \n caught between it and threadbare curtain \n color of lemon soap.";
    }

        if(compassHeading >= 116 && compassHeading < 125) {
             text_area.innerHTML = "4.8 Now it sits, cleared of parasitic flora \n and made up like a corpse,";
    }

        if(compassHeading >= 125 && compassHeading < 134) {
             text_area.innerHTML = "4.9 facing West.";
    }
    //SOUTHEAST h0me no. 5
        if(compassHeading >= 134 && compassHeading < 143) {
             text_area.innerHTML = "5.1 Crows in the nearby-but-not-close, at least three";
    }

        if(compassHeading >= 143 && compassHeading < 152) {
             text_area.innerHTML = "5.2 There had been \n gabled second floor windows, green roof \n back porch covered, front porch open \n windows flanked the storm door \n a few steps up from the foundation. ";
    }

        if(compassHeading >= 152 && compassHeading < 161) {
             text_area.innerHTML = "5.3 Probably raccoons living under there. ";
    }

        if(compassHeading >= 161 && compassHeading < 170) {
             text_area.innerHTML = "5.4 cow is heard lowing a few miles away. \n Pickup truck passes.";
    }

        if(compassHeading >= 170 && compassHeading < 179) {
             text_area.innerHTML = "5.5 Dead grass creases stiffly under my step.  ";
    }
    //SOUTH
        if(compassHeading >= 179 && compassHeading < 188) {
             text_area.innerHTML = "5.6 I fell in love with the house. \n On sunrise drives to work, \n I would pass it and spiral into imaginings:";
    }

        if(compassHeading >= 188 && compassHeading < 197) {
             text_area.innerHTML = "5.7 rain and snow blowing diagonal into close-set second-story eyes,  \n green roof darkening, back porch sagging \n and white paint peeling.";
    }

        if(compassHeading >= 197 && compassHeading < 206) {
             text_area.innerHTML = "5.8 In its absence, I can see across the clearing  \n to where the trees start, ";
    }

        if(compassHeading >= 206 && compassHeading < 215) {
             text_area.innerHTML = "5.9 facing West. ";
    }
    //home no. 6
        if(compassHeading >= 215 && compassHeading < 224) {
             text_area.innerHTML = "6.0 six";
    }
    //SOUTHWEST
        if(compassHeading >= 224 && compassHeading < 233) {
             text_area.innerHTML = "6.1 Rain this day. Some ice, actually. \n The shed door creaks.";
    }

        if(compassHeading >= 233 && compassHeading < 242) {
             text_area.innerHTML = "6.2 A story of kitchen floor holes \n left to grow \n under a refrigerator. Bolted to the wall, \n it would lean and lean but not fall.";
    }

        if(compassHeading >= 242 && compassHeading < 251) {
             text_area.innerHTML = "6.3 This one’s most recently habited.";
    }

        if(compassHeading >= 251 && compassHeading < 260) {
             text_area.innerHTML = "6.4 Cut of wind. Soft white rain sh.";
    }

        if(compassHeading >= 260 && compassHeading < 269) {
             text_area.innerHTML = "6.5 Motor passes on the new road, behind.";
    }
    //WEST
        if(compassHeading >= 269 && compassHeading < 278) {
             text_area.innerHTML = "6.6 Years ago, I walked onto the porch \n with mother and father. Some wooden slats \n framed gaping holes in the floor.";
    }

        if(compassHeading >= 278 && compassHeading < 287) {
             text_area.innerHTML = "6.7 I have a video of dad \n bouncing the tenuous wooden floorboard, \n stomping to flex the beam.";
    }

        if(compassHeading >= 287 && compassHeading < 296) {
             text_area.innerHTML = "6.8 One wooden chair I could see through the back door window \n faced me,";
    }

        if(compassHeading >= 296 && compassHeading < 305) {
             text_area.innerHTML = "6.9 facing South.";
    }

        if(compassHeading >= 305 && compassHeading < 314) {
             text_area.innerHTML = " ";
    }
	}


