const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,object;
var ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();    //Create engine
  world=engine.world;
  
  var ground_options={
    isStatic:true
  }
  
  var object_options={
    restitution:1

  }
  
  object=Bodies.rectangle(200,100,20,20,object_options);   //Created a body
  World.add(world,object);    //Added body to the world

  console.log(object.position);

  ground=Bodies.rectangle(200,350,200,20,ground_options);//Create ground
  World.add(world,ground);

}

function draw() {

  background(0);  
  Engine.update(engine);

  rect(object.position.x,object.position.y,20,20);
  rect(ground.position.x,ground.position.y,200,20);
 
}