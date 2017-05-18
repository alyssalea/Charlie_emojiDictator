var fortunes = ["yes","nah bro", "maybe", "please stop", "oh no", "what?", "only on sundays", "only on mondays", "i know you are but what am I?", "hater says what?", "I don't know","I am not required to answer that", "stop", "how would I know", "of course", "of course not", "totally", "LOL", "Where you at tho", 
"dat way➤","🤗🤗"]


var index = 0;

function setup() {
  createCanvas (1400,400);
  
}
function draw() {
  frameRate (60);
  background(255);
  fill(random(150,255), random(0,0),random(200,255));
  textSize(102);
  text(fortunes [index],100,200);
  
}
function mousePressed() {
  index = floor(random(21));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}