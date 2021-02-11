var fixedRect,movingRect;
var gameObject1;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  gameObject1 = createSprite(200,300,40,60);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(isTouching(fixedRect, movingRect)){
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green" ;
  }

   if(isTouching(movingRect, gameObject1)){
     gameObject1.shapeColor = "yellow";
   }
   else{
     gameObject1.shapeColor = "green";
   }

  drawSprites();
}


