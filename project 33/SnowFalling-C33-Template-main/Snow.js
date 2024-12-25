class Snow {
constructor(x, y, r){
var options = {
isStatic: false, 
density: 1, 
frictionAir: 1
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("snow4.webp");
this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
World.add(world, this.body);
}
display(){
var p = this.body.position;
push();
translate(p.x, p.y);
ellipseMode(RADIUS);
fill(0)
imageMode(CENTER);
image(this.image, 0, 0, this.r)

updateSnow(){
if(this.body.position.y > height){
 Matter.Body.setPosition(this.body, {x:random(0, 800), y: random(0, 100)})
 }
 }
}
}