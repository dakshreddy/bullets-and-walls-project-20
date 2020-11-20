var bullet2,bullet3,bullet4,wall,wall2,wall3,wall4,midwall,midwall2,midwall3;

var thickness;
var bullet,speed,hight;


function setup() {
  createCanvas(800,400);
 bullet = createSprite(50, 50, 20, 20);
 bullet.shapeColor = 'white'
 bullet2 = createSprite(670, 150, 20, 20);
 bullet2.shapeColor = 'yellow'
 bullet3 = createSprite(670, 250, 20, 20);
 bullet3.shapeColor = 'red'
 bullet4 = createSprite(670, 350, 20, 20);
 bullet4.shapeColor = 'green'

 wall = createSprite(1200,200,thickness,hight/2);
 wall.shapeColor = color(80,80,80);


 midwall = createSprite(100,100,10500,5);
 midwall2 = createSprite(100,200,10500,5);
 midwall3= createSprite(100,300,10500,5);
 

  speed = random(223,321);
  hight = random(30,52);

  thickness = random(22,83);

}

function draw() {
  background(0,0,0); 
  bullet.velocityX = speed;
 

if(wall.x-bullet.x < (bullet.width+wall.width)/2){

  bullet.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180){
    bullet.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor = color(320,320,0)
  }
  if(deformation<100){
    bullet.shapeColor = color(0,255,0)
  }
}

  drawSprites();
}

