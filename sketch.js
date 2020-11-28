const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

/*polygon = Bodies.circle(50,200,50);
World.add(world,polygon);

slingshot = new SlingShot(this.polygon, {x:100,y:200});

imageMode (CENTER)
image(polygon_img, polygon.poition.x, polygon.position.y, 40,40);*/

var engine, world;
var stand, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9,
block10, block11, block12, block13, block14, block15, block16;
var score = 0;

function preload() {
    
}

function setup() {
  //createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(520,320,250,15);
  stand2 = new Ground(950,250,250,15);

  text("SCORE:"+ score,750,40);

  //line one
  block1 = new Box(480,319,30,40);
  block2 = new Box(500,319,30,40);
  block3 = new Box(520,319,30,40);
  block4 = new Box(540,319,30,40);
  block5 = new Box(560,319,30,40);
  block6 = new Box(580,319,30,40);
  block7 = new Box(600,319,30,40);

  //line 2
  block8 = new Box(520,319,30,40);
  block9 = new Box(520,319,30,40);
  block10 = new Box(520,319,30, 40);
  block11 = new Box(520,319,30,40);
  block12 = new Box(520,319,30,40);

  //line 3
  block13 = new Box(520,319,30,40);
  block14 = new Box(520,319,30,40);
  block15 = new Box(520,319,30,40);

  //line 4
  block16 = new Box(520,319,30,40);

}

function draw(){
    background(0);
    Engine.update(engine);

    stand.display();
    stand2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    drawSprites();
      
}
