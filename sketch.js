const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, platform
var box
var polygon
var polygonImg
var Slingshot

function preload(){
 polygonImg = loadImage("polygon.png")

}

function setup(){
var canvas = createCanvas(1100,600);
engine = Engine.create();
world = engine.world;

//platforms
ground1 = new Ground(900,300,250,20);
ground2 = new Ground(500,500,350,20);

//Platform1,layer1
box1 = new Box(830,265,35,50);
box2 = new Box(865.5,265,35,50);
box3 = new Box(901,265,35,50);
box4 = new Box(936.5,265,35,50);
box5 = new Box(972,265,35,50);

//Platform1,layer2
box6 = new Box(865.5,215,35,50);
box7 = new Box(901,215,35,50);
box8 = new Box(936.5,215,35,50);

//Platform1,top
box9 = new Box(901,165,35,50);

//Platform2,layer1
box10 = new Box(385,465,35,50);
box11 = new Box(420.5,465,35,50);
box12 = new Box(456,465,35,50);
box13 = new Box(491.5,465,35,50);
box14 = new Box(527,465,35,50);
box15 = new Box(562.5,465,35,50);
box16 = new Box(598,465,35,50);

//Platform2,layer2
box17 = new Box(420.5,415,35,50);
box18 = new Box(456,415,35,50);
box19 = new Box(491.5,415,35,50);
box20 = new Box(527,415,35,50);
box21 = new Box(562.5,415,35,50);

//Platform2,layer2
box23 = new Box(456,365,35,50);
box24 = new Box(491.5,365,35,50);
box25 = new Box(527,365,35,50);

//Platform2,top
box26 = new Box(491.5,315,35,50);

polygon = Bodies.circle(100,250,20);
World.add(world,polygon)

Slingshot = new SlingShot(polygon,{x:100,y:200});

}


function draw(){
background("black")
Engine.update(engine)  
ground1.display();
ground2.display();
fill("cyan")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("lime")
box6.display();
box7.display();
box8.display();

fill("pink")
box9.display();

fill("cyan")
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

fill("pink")
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

fill("lime")
box23.display();
box24.display();
box25.display();

fill("gray")
box26.display();

//polygon holder with slings

imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

//ellipse(polygon.position.x,polygon.position.y,20);
Slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}

function keyPressed(){
 if(keyCode === 32){
     Slingshot.attach(polygon);
 }



}





