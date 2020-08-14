function setup() {
  
  angleMode(RADIUS);
}
 function getBackgroundImg(){
  var response =  fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  response = map();
  
}
function draw() {

  background(0);

  fill(255);
  textSize(24);
  textStyle("bold");
  text(" Tick Tock Clock ", 100,400); 
  
  console.log(getBackgroundImg)
translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  console.log
  strokeWeight(8);
  stroke("yellow");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
 
  stroke("Pink");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("Light blue");
  var end3 = map(hr,0,12,-0,360);
  arc(0,0,260,260,0,end3);
   /* fill(255);
  textSize(24);
  textStyle("bold");
  text("Time : " + end3 + " : " + end2 + " : " + end , 50 , 400);
*/
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  }
  

  