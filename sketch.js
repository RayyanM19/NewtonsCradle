
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var roofObject;
var rope, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(400,100,350,30);
  bob = new Bob(240,500,40);
	bob2 = new Bob(320,500,40);
	bob3 = new Bob(400,500,40);
	bob4 = new Bob(470,500,40);
	bob5 = new Bob(550,500,40);
  rope = new Rope(bob.body, roofObject.body,-150,0);
  rope2 = new Rope(bob2.body, roofObject.body,-75,0);
  rope3 = new Rope(bob3.body, roofObject.body,0,0);
  rope4 = new Rope(bob4.body, roofObject.body,75,0);
  rope5 = new Rope(bob5.body, roofObject.body,150,0);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObject.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-100,y:100})
	}
}

