
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(150,400);
	
	dustbin1 = new Dustbin(400,650,200,20);

	dustbin2 = new Dustbin(310,570,20,150);
	
	dustbin3 = new Dustbin(490,570,20,150);

	ground = new Ground(800,600,10,700);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();

  dustbin1.display();

  dustbin2.display();

  dustbin3.display();

  ground.display();

  Matter.Body.applyForce(paper1.Body,paper.Body.position,{x:85,y:85});
  
  
  drawSprites();
 
}



