
const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5 

var roofObj 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();

	world = engine.world;

	//Create the Bodies Here.
	bobObj1=new bob(width/2-80,height/4+500,40);

	bobObj2=new bob(180,200,40);

	bobObj3=new bob(260,200,40);

	bobObj4=new bob(320,200,40);

	bobObj5=new bob(400,200,40);


	roofObj=new roof(width/2,height/4,width/7,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");

  bobObj1.display();

  bobObj2.display();

  bobObj3.display();

  bobObj4.display();

  bobObj5.display();

  roofObj.display();
  
  drawSprites();
 
}



