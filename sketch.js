
var r = 0;
var g = 50;
var b=70;
var circle;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(400,400);    
}


function draw(){
  background(0);

  let r = map(mouseX, 0, width,25, 75);
  ellipse(r, 25, 25, 25);
  //This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  let g = map(mouseX, 0, width, 0, 100, true);
  ellipse(g, 75, 25, 25);  
  //let b = map(mouseX,0,width,0,115,true);
  //elllipse(b,140,25,25);


  //ellipse(200,200,20);
  //ellipse.velocityX = mouse.x
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}