//NAMESPACING (Nicknames)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball;
var ground, ground_options;

function setup() {
  createCanvas(400,400);
  
engine = Engine.create();
world = engine.world;

//changing attribute of the body
var ball_options = {restitution:2};
ball = Bodies.circle(200,100,20,ball_options);
World.add(world, ball);

ground_options = {isStatic: true};
ground = Bodies.rectangle(200, 390, 400,20, ground_options); //Passing options to the body
World.add(world, ground);

console.log(ground);
}

function draw() {
  background(0);  
  //Engine getting updated according to the laws of physics in every frame
  Engine.update(engine);
  
  rectMode(CENTER);  //Make the computer take the x & y position at the centre of the rectangle
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}

/*
p5.play -- sprites
New library?
Library which follows all the laws of physics
-PHYSICS ENGINE


MATTER LIBRARY
1. Engine - Universe which follows all the laws
   -Matter.Engine
2. World - Situation that we are in
   -Matter.World
3. Bodies - grounds
   -Matter.Bodies

To change any property(attribute) of a body, we need to pass options to the body

NameSpacing - giving nicknames to make the code easier to read & write


ellipse(x, y, r1, r2) - oval shape
*/