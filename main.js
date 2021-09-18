canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
rover_width = "100";
rover_height = "90";
rover_x = "20";

rover_y = "20";
background_img = "mars.jpg";
rover_img = "rover.png";
function add(){
    image = new Image();
    image.onload = upload_background;
    image.src = background_img;

    rover_img = new Image();
    rover_img.onload = upload_rover;
    rover_img.src= "rover.png";



}
function upload_background(){
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);}
    window.addEventListener("my_key_down",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed + "was the key pressed");
    if(keyPressed == "37"){
       left();
       console.log("left");
    }
    if(keyPressed == "38"){
        up();
        console.log("up");
     }
     if(keyPressed == "39"){
        right();
        console.log("right");
     }
     if(keyPressed == "40"){
        down();
        console.log("down");
     }
}
function up(){
    if(rover_y>=0) {
    rover_y = rover_y - 10
console.log("when up arrow is pressed,x ="+ rover_x +"y=" +rover_y);
upload_background();
upload_rover();
}
}
function down(){
    if(rover_y<=500) {
    rover_y = rover_y + 10
console.log("when down arrow is pressed,x ="+ rover_x +"y=" + rover_y);
upload_background();
upload_rover();
}
}
