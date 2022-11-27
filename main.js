canvas= document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rover_width= 100;
rover_height= 90;

background_image= ["mars.jpg","img1.jpg","img2.jpg","img2.jpg","img3.jpg","img4.jpg"];

rover_image="rover.png";

rover_x= 10;
rover_y= 10;

function add() {
  random_number= Math.floor(Math.random()*4)
  console.log(random_number)

background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image[random_number];

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

}

function uploadBackground() {

ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {

ctx.drawImage(rover_imgTag, rover_x , rover_y, rover_height, rover_width)

}

function up()

{
  if(rover_y >= 0)
{
  rover_y = rover_y - 10
  uploadBackground()
  uploadrover()
}
}

function down()

{
  if(rover_y <= 500)
{
  rover_y = rover_y + 10
  uploadBackground()
  uploadrover()
}
}

function left()
{
  if(rover_x >= 0)
  {
    rover_x = rover_x - 10 
    uploadBackground()
    uploadrover()
  }
}

function right()
{
  if(rover_x <= 700)
  {
    rover_x = rover_x + 10 
    uploadBackground()
    uploadrover()
  }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
console.log(e)

keyPressed = e.keyCode;
console.log(keyPressed); 
 if(keyPressed == "38")
 {
   up();
   console.log("up");
 }
 if(keyPressed =="40")
 {
   down();
   console.log("down");
 }
 if(keyPressed == "37")
 {
   left();
   console.log("left");
 }
 if(keyPressed == "39")
 {
   right();
   console.log("right");
 }

}