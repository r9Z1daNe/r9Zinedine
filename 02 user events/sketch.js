// User Events + day 1 challenge
// Sam
// 9/11/2025
//
// GLOBAL VARIABLES HERE...
//can only work with "simple" data in this
//section of code.

let circleColor = false;
let currentcolor = "white";

let x;
// declaration initiallization


function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width / 2


}

function draw() {
  background(220);
  challenge(); // coordinate system challenge
  movement();
  rect(x,300,60,30);

}

function movement(){-
  // check for keyboard presses each frame
  //and move to
  //if (keyCode === RIGHT_ARROW && KeyisPressed) x += 5;
  //else if ( keyCode === LEFT && KEy is Pressed) x -= 5;

if key

}




function KeyPressed(){
//this is a special EVENT function, gets
//automatically called anytime keyboard
//button is pressed.
print("key was pressed")
if(key === "g") currentcolor = "green";
else if (KeyCode === SHIFT && key === "a") currentColor = "amber";
circleColor =! circleColor


// how to tell which key was pressed???
}


function challenge(){
  //draw 5 hollow circles, in 4 corners and
  //center position, 50px in diameter each
  nofill();

  if(circleColor === true) {    //circlecolor ===
    fill(currentcolor);
  }

  // 5 circles
  circle(0,0,50);
  circle(width,0,50);
  circle(0,height,50);
  circle(width,height,50);
  circle(width * 0.5,height * 0.5,50)
}