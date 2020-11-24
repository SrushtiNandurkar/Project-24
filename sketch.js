
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var ground,invisibleBlock;
var paperBall,dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(700,height-30,1400,20);

	dustbin1 = new Dustbin(1100,550,250,20);
	dustbin2 = new Dustbin(963,480,25,120);
	dustbin3 = new Dustbin(1235,480,25,120);


	paperBall = new Paper(100,550,20);

	var render = Render.create({ 
		element: document.body,
		 engine: engine,
		 options: { width: 1200, height: 700, wireframes: false } 
		});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paperBall.display();

  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{
			x:130,
			y:-145});

	}
  
}



