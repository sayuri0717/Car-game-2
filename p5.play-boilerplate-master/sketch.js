var car;
var wall;
var speed;
var weight;
var deformation;
deformation=0.5*speed*speed;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  
  wall=createSprite (1500,200,60,height/2)
  wall.shapeColor=(80,80,80);

  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  car.velocityX=speed;

  if (deformation <100){
  car.shapeColor = (0,225,0);
}

if (deformation = 100<180){
car.shapeColor = (230,230,0);
}

if (deformation = 134){
  car.shapeColor = (255,0,0);
  }
  drawSprites ();
}
