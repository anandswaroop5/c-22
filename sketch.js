const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Bodies
var engine,world,object,ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Body.rectangle(10,390,900,10,ground_options)
  World.add(world,ground);
  object = Body.rectangle(200,100,50,50);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  var ball_options = {
  restitution:2
  }
  ball = Body.circle(300,200,20,ball_options)
  World.add(world,ball);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,900,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}