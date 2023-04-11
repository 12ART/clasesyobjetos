const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var boxTop, boxRight, boxLeft, boxBottom;
var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  boxTop = new Box(200,10,400,20)
  boxRight = new Box(390, 200, 20, 400)
  boxLeft = new Box(10, 200, 20,400)
  boxBottom = new Box(200, 390, 400, 20)

  var ball_options={
     restitution:0.95,
     frictionAir:0.01
  }
  ball= Bodies.circle(200,100,20, ball_options);
  World.add(world, ball)
  


  
}

function draw() 
{
  background("pink");
  Engine.update(engine);
  boxTop.show();
  boxRight.show();
  boxLeft.show();
  boxBottom.show();

  ellipse(ball.position.x, ball.position.y, 20)


}

