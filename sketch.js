
function preload() {
  bg = loadImage("images/garden.png")
  tom = loadAnimation("images/cat1.png")
  tom2 = loadAnimation("images/cat2.png","images/cat3.png")
  tom4 = loadAnimation("images/cat4.png")

  jerry = loadAnimation("images/mouse1.png")
  jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
  jerry4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600)
    cat.addAnimation("slepping",tom)
    cat.scale = 0.2

    mouse = createSprite(200,600)
    mouse.addAnimation("standing",jerry);
    mouse.scale = 0.2

}

function draw() {

    background(bg);
   if(cat.x-mouse.x<=(cat.width-mouse.width)/2)
 {
     cat.velocityX=0;
     cat.addAnimation("standing", tom2);
     cat.x=300;
     cat.scale=0.2;
     cat.changeAnimation("last",tom3);

     mouse.addAnimation("standing", jerry2);
     jerry.x=300;
     jerry.scale=0.2;
     jerry.changeAnimation("last",jerry3);

 }
    drawSprites();
}


function keyPressed(){

 if(keyCode=== LEFT_ARROW) {
cat.velocityX=-5;
cat.addAnimation("running",tom2);
jerry.addAnimation("running",jerry2);

 }


}
