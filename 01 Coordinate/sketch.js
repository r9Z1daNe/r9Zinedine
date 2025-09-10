// Coordinate Systems and User Events
// Sam
// Septermber 10, 2025
//A first look at interactive programs with p5.js
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth,windowHeight);
  print(windowWidth, windowHeight, width, height);
}

function draw() { // runs OVER and OVER
                  // targetting 60 frames per second
  // STRIVE to keep draw() clean and tidy
  background(220);// draws a big solid rectangle
  fill(0, 255, 0);// 0 - black 255 -  white
       // R G B
  circle(mouseX,mouseY, 30);
  drawTwoCricles()
}


function drawTwoCricles(){
    //draws two circles, one at a fixed location
    // and one at the mouse location. 
  fill(255,0,255);
      //R G B
  circle(mouseX, mouseY, 30);

  circle(width/2, height/2, 100);

}