const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


function preload(){
	treeImg= loadImage("sprites/tree.png");
	boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	ground= Bodies.rectangle(width/2,590,1000,10,{isStatic : true});
	
	var tree = createSprite(800,400);
	tree.addImage("tree", treeImg);
	tree.scale=0.3;

	var boy = createSprite(150,520);
	boy.addImage("boy", boyImg);
	boy.scale = 0.1;

	stone = new Stone();
	mango1 = new Mango(680,330);
	mango2 = new Mango(710,380);
	mango3 = new Mango(740,270);
	mango4 = new Mango(770,330);
	mango5 = new Mango(800,280);
	mango6 = new Mango(830,340);
	mango7 = new Mango(880,260);
	mango8 = new Mango(890,350);
	mango9 = new Mango(940,330);


	/*var x = Matter.Mouse.create(canvas.elt) 
    x.pixelRatio = pixelDensity()
    var options = {
        mouse : x,
    }
   var mconstraint =Matter.MouseConstraint.create(engine, options);
    World.add(world, mconstraint);*/

	constraint1 = new Constraint(stone.body,{x:100, y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);

  rect(ground.position.x, ground.position.y,1000,10);

  drawSprites();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 

 constraint1.display();

 detectCollision(stone, mango1);
 detectCollision(stone, mango2);
 detectCollision(stone, mango3);
 detectCollision(stone, mango4);
 detectCollision(stone, mango5);
 detectCollision(stone, mango6);
 detectCollision(stone, mango7);
 detectCollision(stone, mango8);
 detectCollision(stone, mango9);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    constraint1.fly();
}

function detectCollision(stone, mango){
  mangoPosition = mango.body.position;
  stonePosition = stone.body.position;

  var distance = dist(stonePosition.x,stonePosition.y, mangoPosition.x, mangoPosition.y );
  if(distance <= mango.r + stone.r){
	  Matter.Body.setStatic(mango.body, false);
  }
}

function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body,{x :235, y: 420});
		constraint.attach(stone.body);
	}
}