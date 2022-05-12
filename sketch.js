
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao;
var ball1;
var ball2;
var ball3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var chaoConfig ={
		isStatic: true
	}

	chao = Bodies.rectangle(600,580,1200,2,chaoConfig);
	World.add(world,chao);

	var ball1Config = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var ball2Config = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}

	var ball3Config = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}
	
    ball1 = Bodies.circle(220,10,10,ball1Config);
	World.add(world,ball1);

	ball2 = Bodies.rectangle(110,50,10,10,ball2Config);
	World.add(world,ball2);

	ball3 = Bodies.rectangle(350,50,10,10,ball3Config);
	World.add(world,ball3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball1.position.x, ball1.position.y, 30);
  rect(ball2.position.x, ball2.position.y, 50, 50);
  rect(ball3.position.x, ball3.position.y, 100, 50);
  rect(chao.position.x, chao.position.y, 1200, 2);
  
  drawSprites();
 
}



