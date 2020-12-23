var fixedRect, movingRect;

var fixedRect1, fixedRect2, fixedRect3;


function setup() {
  createCanvas(800,400);
  fixedRect2 = createSprite(380,200,50,50)
  fixedRect1 = createSprite(300,200,50,50)
  fixedRect2.shapeColor = "green"
  fixedRect1.shapeColor = "purple"
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400, 100, 50,50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(0,0,0); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(isTouching(movingRect, fixedRect2))
  {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "blue";
  }
 
  if(isTouching(movingRect, fixedRect1))
  {
    movingRect.shapeColor = "white";
    fixedRect1.shapeColor = "white";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "blue";
  }

  drawSprites();
}

function isTouching(object1, object2)
{
  if(object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y- object2.y < object1.height/2+ object2.height/2 
    && object2.y-object1.y < object1.height/2 + object2.height/2 )
  {
    return true;
  }
  else{
    return false;
  }
}