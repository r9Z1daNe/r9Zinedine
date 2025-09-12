// User Events + day 1 challenge
// Sam
// 9/11/2025
//
// GLOBAL VARIABLES HERE...
let circleColor = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge(); // coordinate system challenge
}

function KeyPressed(){
//this is a special EVENT function, gets
//automatically called anytime keyboard
//button is pressed.
  print("key was pressed")
  circleColor = !circleColor;

// how to tell which key was pressed???
}


function challenge(){
  //draw 5 hollow circles, in 4 corners and
  //center position, 50px in diameter each
  nofill();

  if(circleColor === true) {    //circlecolor ===
    fill(255,0,0);
  }

  // 5 circles
  circle(0,0,50);
  circle(width,0,50);
  circle(0,height,50);
  circle(width,height,50);
  circle(width*0.5)
}