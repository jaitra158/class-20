var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 100);
 movingRect =  createSprite(600, 200, 100, 50);
 movingRect.shapeColor="blue";
 fixedRect.shapeColor="blue";
 movingRect.velocityX=5;
 fixedRect.velocityX=-5;
}

function draw() {
  background(0);
  //movingRect.x=mouseX;
  //movingRect.x=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    }

  drawSprites();
}