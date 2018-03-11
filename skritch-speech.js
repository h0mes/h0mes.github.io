//introduce global variables
//it's important to introduce variable before function. you could assign value to it before function, too, but it would be local to .js as opposed to using p5.js
var mirrorText;
var mirrorSplit;
var index;
var drawCount;
var mic;

function preload() {
  soundFormats('mp3', 'ogg');
  ssss = loadSound('assets/ssss.mp3');
  tremendous_velocity = loadSound('assets/tremendous_velocity.mp3')
  tktk = loadSound('assets/tktk.mp3')
  
}

function setup() {
  // put setup code here. it will run only once.
  mirrorText = "one  .  indurated, fading earthward faces outwards right up against tremendous velocity:  years of holding tilts it  ten degrees into earth. soft mossed-over steps lead to the side door. Front stairs chipped off, muted. rotting floorboards would cocoon footsteps.  .  endless whine of motors kinetic anxiety of wheels  . . machines struggle to round the uphill curve.  . . Two sisters lived here back in my childhood. Grinning, toothless, white hairs sprouted from their doughy chins, round and soft.  .  They were ancient, even then. Their long skirts and small steps  \nmoving slowly, voices crackling with delight.  .  Cars just fly past, rounding \nthe gap in the mountain where weather changes,  .  headed East.   .  four  .  A tension that draws shoulderblades together contracts cold and static.  .  The only sign of a recent wildness a gutter suspended over the front porch like a false lash come unglued from a pale eyelid  .  Up the gravel road, a car  .  I hear while standing there. Tiny bird  .  illuminated in bare light of gray sky.  .  One summer, years ago, I walked here not alone. We hiked up through briars to peek in the side window.  .  thousand insects stuck to warped glass caught between it and threadbare curtain color of lemon soap.  .  Now it sits, cleared of parasitic flora and made up like a corpse,  .  facing West.   .  five  .  Crows in the nearby-but-not-close, at least three  .  There had been gabled second floor windows, green roof back porch covered, front porch open windows flanked the storm door a few steps up from the foundation.  .  Probably raccoons living under there. .  cow is heard lowing a few miles away. Pickup truck passes. .  Dead grass creases stiffly under my step.  .  I fell in love with the house. On sunrise drives to work, I would pass it and spiral into imaginings:  .  rain and snow blowing diagonal into close-set second-story eyes,  green roof darkening, back porch sagging and white paint peeling.  .  In its absence, I can see across the clearing  to where the trees start,  .  facing West.    .  six  .  Rain this day. Some ice, actually. The shed door creaks.  .  A story of kitchen floor holes left to grow under a refrigerator. Bolted to the wall, it would lean and lean but not fall.  .  Cavities rot the floor open.  .  Wind pushes whistles through propped-open windows.  .  Motor passes on the new road, behind.  .  Years ago, I walked onto the porch with mother and father. Some wooden slats framed gaping holes in the floor.  .  I have a video of dad bouncing the tenuous wooden floorboard, stomping to flex the beam.  .  One wooden chair I could see through the back door window faced me,  .  facing South.";
  //___.split() splits text into units. the argument (here "e") is the splitter - splits the text into units separated by the chosen splitter.
  //then it creates an array of the units that are now split.
  mirrorSplit = mirrorText.split(" ")
  createCanvas(windowWidth, windowHeight);
  textFont("courier", 10);
  index = 0;
  //frameRate(40) //--> would slow whole thing down; limiting if you want to add another element that is a different speed
  drawCount = 0;
  FFT = new p5.FFT();
  ssss.setVolume(0.3);
  tremendous_velocity.setVolume(0.3);
  tktk.setVolume(0.5);
  mic = new p5.AudioIn();
  mic.start();
  FFT.setInput(mic);
  ssss.playMode('untilDone');
  tremendous_velocity.playMode('untilDone');
  tktk.playMode('untilDone');
  //var filter = new p5.BandPass()
  var myRec = new p5.SpeechRec();
}

/* list available voices
function doList(){
  myVoice = new p5.Speech();
  console.log(myVoice.listVoices());
}
doList()*/


function draw() {
  var myVoice = new p5.Speech();
  myVoice.setPitch(1.6);
  myVoice.setRate(0.7);
  myVoice.setVolume(0.5);
  var mic_level = mic.getLevel();
  //analyze() finds amplitude values and returns an array of 1024 frequency values from lowest to highest, each of which has been assigned a value representing amplitude (0-255) at that given frequency.
  var spectrum = FFT.analyze()
  var bass_energy = FFT.getEnergy("bass")
  var mid_energy = FFT.getEnergy("mid")
  var hi_energy = FFT.getEnergy("highMid")
  var filter = 
  //var waveform = FFT.waveform()
  //xLocation1 = -500-mic_level*2500
  //xLocation2 = 500-mic_level*2500
  // put drawing code here. this will run 60 times per second.
  //fill: grayscale: black is 0, white is 255, grays in between
  //add two commas and it's RGB: (0,0,0)where red is 0, green is 0, blue is 0
  fill(255);
  //frameRate(60)
  //translate() centers the text by translating the grid.
  //translate(displayWidth/2, displayHeight); --> measures screen and not window. so will not be perfectly centered
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER);

  //text() takes 3 arguments: what text, where on x-axis, and where on y-axis
  text(mirrorSplit[index], random(-500, 500), random(-500,500));
	drawCount = drawCount + 1;
//*FREQUENCY CONTROLLED PLAYBACK*//
  if (bass_energy > 10){
      //tktk.play();
      myVoice.speak(mirrorSplit[index])
      index = index + 1;
    if(index >= mirrorSplit.length); {
      index = 0;
      }
    }
  else if (mid_energy > 10){
      tremendous_velocity.play();
      index = index + 1;
      if(index >= mirrorSplit.length); {
          index = 0;
        }
    }
  else if (hi_energy > 10) {
      ssss.play();
      index = index + 1; 
   if(index >= mirrorSplit.length) 
    {index = 0;}
  }

  function showResult()
  {
    if(myRec.resultValue==true) {
      background(192, 255, 192);
      text(myRec.resultString, width/2, height/2);
      console.log(myRec.resultString);
    }
  }

	//modulus
  //if(drawCount % 60 == 0) {
  		//index = index + 1;
      //if(index >= mirrorSplit.length) {
          //index=0
      //}
      //background(251,224,212)
  //}
  
  //VOLUME CONTROLLED PLAYBACK
/*if (mic_level <= 1 && mic_level >0.7){
      tktk.play();
      index = index + 1;
    if(index >= mirrorSplit.length); {
      index = 0;
      }
    }
  else if (mic_level <=0.7 && mic_level >0.2){
      tremendous_velocity.play();
      index = index + 1;
      if(index >= mirrorSplit.length); {
          index = 0;
        }
    }
  else (index = index + 1); 
   if(index >= mirrorSplit.length) 
    {index = 0;}*/

//function mouseClicked(){
       // ssss.stop()
     // }

index = index + 1;
if(index >= mirrorSplit.length) {
    index = 0;
  }
}