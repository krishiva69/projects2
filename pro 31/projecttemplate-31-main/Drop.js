class Drop{
    constructor(x, y, r)
 {
var options = {
isStatic: false,
restitution: 1,
friction: 0.1,
density: 0.8
 }
this.r=r;
this.body= Bodies.circle(x, y, r, options)
 World.add(world, this.body)
 var maxDrop = 100;
  }

display(){
  var p = this.body.position;
  push();
  translate(p.x, p.y)
  ellipseMode(RADIUS)
  fill("blue")
ellipse(0, 0, this.r, this.r)
pop();

for( var i = 0; i<maxDrop; i++){
drop.push(new createDrop(random(0,400), random(0, 400)));
}
}



}