var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(300,600,20,100);
	box1Sprite.shapeColor=color('red');

	box2Sprite=createSprite(400,650,200,20);
        box2Sprite.shapeColor=color('red');
	
	box3Sprite=createSprite(500,600,20,100);
	 box3Sprite.shapeColor=color('red');
	
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
        box1 = Bodies.rectangle(300,600,20,200);
	World.add(world, box1);
	box2 = Bodies.rectangle(400,650,200,20);
	World.add(world, box2);
	box3 = Bodies.rectangle(500,600,20,100);
	 World.add(world, box3);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	 World.add(world, packageBody);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
  }
}



