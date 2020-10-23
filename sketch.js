
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball1,ground;
var right,left,bottom;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball1=new Ball(200,450,50);
  ground=new Ground(750,470,1600,25)
   right=new Box(1218,360,10,200);
	left=new Box(1387,360,10,200);
	bottom=new Box(1300,360,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  ball1.display();
  right.display();
  left.display();
  bottom.display();
  ground.display();
  keypressed();
  drawSprites();

}

function keypressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-25});

}
}

