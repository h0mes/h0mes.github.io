//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = 360 - e.alpha;
        }
        //north
        if(compassHeading > 330 || compassHeading < 20) {
             text_area.textContent = "tremendous velocity";
    }   //northeast
        if(compassHeading >= 20 && compassHeading < 60) {
             text_area.textContent = "steam";
    }   //east
        if(compassHeading >= 60 && compassHeading < 110) {
             text_area.textContent = "indurated";
    }   //southeast
        if(compassHeading >= 110 && compassHeading < 160) {
             text_area.textContent = "facing outwards";
    }
        //south
        if(compassHeading >= 160 && compassHeading < 200) {
             text_area.textContent = "fading earthwards";
    }   
        //southwest
        if(compassHeading >= 200 && compassHeading < 240) {
             text_area.textContent = "as I recall";
    }
        //west
        if(compassHeading >= 240 && compassHeading < 290) {
             text_area.textContent = "t h e  s i s t e r s";
    }
        //northwest
        if(compassHeading >= 290 && compassHeading <= 330) {
             text_area.textContent = "who lived here in my childhood";
    }
         
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
    window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
    }
