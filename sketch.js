
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg
var mango

function preload()
{
	boyImg  = loadImage("boy.png"); 
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,600,1000,20)
	
	tree = new Tree(750,400)

	mango1 = new Mango(800,300,30);
	mango2 = new Mango(850,270,30);
	mango3 = new Mango(750,255,30);
	mango4 = new Mango(650,255,30);
	mango5 = new Mango(600,350,30);
	
	stone = new Stone(190,495,35)
	
	slingshot = new Slingshot(stone.body,{x:190,y:495});
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  imageMode(CENTER);
  image(boyImg,250,540,200,200);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  slingshot.display();
  collision(stone,mango1);
  collision(stone,mango2);
  collision(stone,mango3);
  collision(stone,mango4);
  collision(stone,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot.fly()

}

function keyPressed(){
  if(keyCode === 32){}
    Matter.Body.setPosition(stone.body,{x:190,y:495});
	slingshot.attach(stone.body);
}

function collision(stone,mango){
	var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.y)

	if(distance<=mango.r+stone.r){
      Matter.Body.setStatic(mango.body,false);

	}

}
