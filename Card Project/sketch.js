let ghostImage;

function preload(){
  ghostImage = loadImage("Ghost.png");
}

function setup() {
  createCanvas(800, 800);
}

let doorOpen = false;
let ghostVisible = false;

function draw() {
  background(0);
  noStroke();
  
  //Moon
  fill('yellow');
  ellipse(150, 100, 120);
  fill(0);
  circle(100,100,80);

  //Ground
  fill("#5C5330");
  rect(0,550,1000);

  //Haunted mansion
  fill("#5C3F30"); // Brown
  rect(200, 300, 400, 300);
  rect(0, 350, 200, 200);
  rect(600,350,200,200);
  fill(100);
  triangle(100, 300, 400, 150, 700, 300); // Roof
  rect(0,320,200,80);
  rect(600,320,200,80);
  fill("yellow");
  rect(240, 400, 80, 120); // Left window
  rect(480, 400, 80, 120); // Right window
  circle(280,400,80); // Left window top
  circle(520,400,80); // Right window top
  // Smaller windows
  rect(20,450,40,60);
  rect(120,450,40,60);
  rect(640,450,40,60);
  rect(735,450,40,60);
  fill("#5C3F30"); //Brown
  rect(275,350,10,180); //Left window frame1
  rect(200,450,400,10); //Left and Right window frame2
  rect(500,350,10,180); //Right window frame1
  fill("brown");
  rect(360, 400, 80, 200); // Door
  fill(0);
  circle(430,500,10) // Door knob
  fill(170);
  rect(350,600,100,300); // Path

 //stems
 fill("green");
 rect(280,656,5,50);
 rect(80,610,5,50);
 rect(680,610,5,50);
 
  //Pumpkin1
  fill("#DB9004");
  ellipse(300,700,40,60);
  ellipse(285,700,40,60);
  ellipse(270,700,40,60);
  //Pumpkin2
  ellipse(100,650,40,60);
  ellipse(85,650,40,60);
  ellipse(70,650,40,60);
  //Pumpkin3
  ellipse(700,650,40,60);
  ellipse(685,650,40,60);
  ellipse(670,650,40,60);


  //Ghost
  if (ghostVisible) {
    image(ghostImage, 200, 250, 400, 400);
  }
}

//Interaction
function mouseClicked() {
  if (!doorOpen && mouseX > 360 && mouseX < 440 && mouseY > 400 && mouseY < 600) {
    doorOpen = true;
    setTimeout(() => {
      ghostVisible = true;
      setTimeout(() => {
        ghostVisible = false;
        doorOpen = false;
      }, 1000);
    }, 500);
  }
}

// Stroke around door
function mouseMoved(){
  stroke(200,400,100);
  fill("brown");
  rect(360, 400, 80, 200); // Door
  fill(0);
  circle(430,500,10) // Door knob
}
