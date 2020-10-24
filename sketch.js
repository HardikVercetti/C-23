 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;


 var engine, world , box1 ;
 function setup() {
  createCanvas(400,400);

  engine  = Engine.create()
 
  world = engine.world ;



box1 = new Box(200 , 200 , 50, 50 )
box2 = new Box( 240, 100, 50, 100)

  body  = Bodies.rectangle(200 , 380, 400 , 20, {isStatic :true })
  World.add(world , body  )
  console.log(body)

  
}

function draw() {
  background(0); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(body.position.x, body.position.y, 400 , 20)
  box1.display();
  box2.display();


  
}