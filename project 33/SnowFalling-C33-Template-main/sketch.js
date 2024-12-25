const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow;
var bg;
var rand;
var snow =[];

function preload(){
bg = loadImage("snow1.jpg")
}

function setup() {
createCanvas(800,400);
engine = Engine.create();
world = engine.world;

for(var i = 0; i < 100; i++){
snow.push(new Snow(random(0, 1000),random(0, 850)))
}
}

function draw() {
  background(bg);  
  Engine.update(engine)

  for(var i = 0; i < snow.length; i++){
    snpw[i].display();
    snow[i].updateDrops();

    drawSprites();
    }
}