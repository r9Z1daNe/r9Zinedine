// State Variables and Real Time
// Sam
// 9/18/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Global Varaibles

let shapeState = 0; //0 - Circle, 1-square, 2- triangle, 3 - transistion
let startTime, elapsedTime;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //targetting 60 fps
  //using this for time is sketchy, because no guarantee we can 
  //achieve the target framerate
  background(220);
  drawShape();
  //print ("frame: "  + frameCount);
}


function manageTimes(){
  //print(millis());
  elapsedTime = millis()
  text(elapsedTime/1000, width *0.3, height*0.75);
}

function KeyPressed(){
  // automatically called on any keyboard button preess
  // state var: 0 -> 1  1 -> 2
  //            2-> 3 (for 2 seconds) -> 0
  if (shapeState < 3){
    shapeState++;
  }
}

function drawShape(){
  //inspect our state varibale, and draw 1 of 4 possible 
  // options, depending on the current value
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;      let y = height/2;
      triangle(x-50, y+50, x + 50, y + 50, x, y-25)
      break;
    case 3: 
      for(let i = 0; i <20; i++){
        let x = random(width*0.4)
      }
  }
}