var h1,p1,s1,r1;
var a1,a2,a3,a4,a5,a6;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  h1=new hammer()
  p1=new plane()
  s1=new stone()
  r1=new rubber()
  a1=new sand(200,200,20)
  a2=new sand(200,200,20)
  a3=new sand(200,205,20)
  a4=new sand(200,210,20)
  a5=new sand(200,215,20)
  a6=new sand(200,220,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(14, 224, 247));
  h1.display()
  p1.display()
  s1.display()
  r1.display()
  a1.display()
  a2.display()
  a3.display()
  a4.display()
  a5.display()
  a6.display()
  drawSprites();
 
}



