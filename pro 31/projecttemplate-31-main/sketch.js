const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1;

function preload(){
    
}

function setup(){
var canvas = createCanvas(550, 700);
engine = Engine.create();
world = engine.world;

drop1 = new Drop(200, 200, 5);
    
}

function draw(){
background("black")
drop1.display();
}   

