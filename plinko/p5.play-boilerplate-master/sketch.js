var ground, wall1, wall2, wall3, wall4, ball, plinko
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinkoArray;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Box(700, 800, 700, 25);
  wall1 = new Box(350, 400, 25, 800);
  wall2 = new Box(1050, 400, 25, 800);
  wall3 = new Box(600, 800, 25, 700);
  wall4 = new Box(800, 800, 25, 700);
  plinkoArray=[];
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  drawSprites();
  ground.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()

  if(frameCount % 80 === 0){
    plinko = Bodies.circle(random(400,900), 50, 15)
    World.add(world,plinko)
    plinkoArray.push(plinko);
  }
  
  for (let index = 0; index < plinkoArray.length; index++) {
    push()
    ellipseMode(RADIUS);
    ellipse(plinkoArray[index].position.x,plinkoArray[index].position.y,15)
    pop();
  }

}