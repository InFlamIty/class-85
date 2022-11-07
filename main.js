canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverImage = "rover.png"
bgArray = ["bg1.jpg" , "bg2.jpg" , "bg3.jpg" , "bg4.jpg" , "bg5.jpg" , "mars.jpg"]
randomNum = Math.floor(Math.random() *6)
backgroundImage = bgArray[randomNum]
roverX = 200
roverY = 200
roverHeight = 100
roverWidth = 125
function add()
{
    bgTag = new Image()
    bgTag.onload = uploadBg
    bgTag.src = backgroundImage
    rover = new Image()
    rover.onload = uploadRover
    rover.src = roverImage
}
function uploadBg()
{
    ctx.drawImage(bgTag, 0, 0, canvas.width, canvas.height)
}
function uploadRover()
{
    ctx.drawImage(rover, roverX, roverY, roverWidth, roverHeight)
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "37") {
        console.log("left arrow")
        left()
    }
    if (keyPressed == "38") {
        console.log("up arrow")
        up()
    }
    if (keyPressed == "39") {
        console.log("right arrow")
        right()
    }
    if (keyPressed == "40") {
        console.log("down arrow")
        down()
    }
}
function up()
{
    if (roverY > 0) {
        roverY = roverY - 10
        console.log("when up arrow is pressed x =" + roverX  + " y = " + roverY)
        uploadBg()
        uploadRover()
    }
}
function down()
{
    if (roverY < 500) {
        roverY = roverY + 10
        console.log("when down arrow is pressed x =" + roverX  + " y = " + roverY)
        uploadBg()
        uploadRover()
    }
}
function left()
{
    if (roverX > 0) {
        roverX = roverX - 10
        console.log("when left arrow is pressed x =" + roverX  + " y = " + roverY)
        uploadBg()
        uploadRover()
    }
}
function right()
{
    if (roverX < 700) {
        roverX = roverX +10
        console.log("when right arrow is pressed x =" + roverX  + " y = " + roverY)
        uploadBg()
        uploadRover()
    }
}
