const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
world=engine.world


box1=new Box(80,270,50,50);
box2=new Box (100,300,50,50)
ground=new Ground(400,380,800,20)


}

function draw() {
  Engine.update(engine)
  background(255,255,255);  

 
box1.display();
box2.display();
ground.display();

}