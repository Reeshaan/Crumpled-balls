
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
function preload(){
	dustbinImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper (300,350,20)
	groundObject=new Ground(width/2,670,width,20);
	dustbinObjCenter=new Ground(1000,650,120,20);
	dustbinObjLeft=new Ground(950,600,20,100);

	dustbinObjRight=new Ground(1050,600,20,100);

  dustbin=createSprite(1000,600,120,20)
  dustbin.addImage(dustbinImg)
  dustbin.scale=0.5
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine)
  paperObject.display();
  groundObject.display();
  dustbinObjCenter.display();
  dustbinObjLeft.display()
   dustbinObjRight.display()
drawSprites();
 }

function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}