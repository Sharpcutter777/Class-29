const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let ground;
var fruit,rope,fruitConnection;
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(250 , 650, 500 , 20);
  rope = new Rope(6,{x:245,y:30})
  fruit = Bodies.circle(250,350,20)
  Matter.Composite.add(rope.body,fruit)
  fruitConnection=new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,20,20)
  ground.show()
   
}




