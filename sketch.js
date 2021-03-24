const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var log1,log2;
var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
box3=new Box(700,100,70,70);
box4=new Box(920,100,70,70);

bird1=new bird(100,150);


pig1=new pig(820,350,50,50);
log1=new log(810,260,300,PI/2);
log2=new log(810,280,300,PI/2);
pig2=new pig(820,100,50,50);


    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
     box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
       pig1.display();
       log1.display();
       log2.display();
    pig2.display();
    bird1.display();
    
}