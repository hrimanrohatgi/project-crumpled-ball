  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  var ground;
  var white1,white2,white3;
  var ball;

  function setup() { 
  createCanvas(400, 400);
  
  engine = Engine.create();
  world = engine.world
   Engine.run(engine);

  ball = new paper(20,280,20,20)

  ground = new Ground(200,370,500,20)

  white1 =  createSprite(225,370,90,15)
  white1.shapeColor = "yellow";

  white2 = createSprite(180,343,15,70)
  white2.shapeColor = "yellow";

  white3 = createSprite(270,343,15,70)
  white3.shapeColor = "yellow";
  
  }
  function draw() { 
   background("blue");
  drawSprites();
  ground.display();
  ball.display();
  console.log(ball.body.position);
  }
  function keyPressed(){
    if(keyCode === UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position, {x:2,y:-2});
     }
    } 