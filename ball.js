class Ball{
constructor(x,y,radius){
var options={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.3
}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
this.image=loadImage("sprites/paper.png")
World.add(world,this.body)
}

display() { 
var paperpos=this.body.position; 
push() 
translate(paperpos.x, paperpos.y);
 imageMode(CENTER) 
 strokeWeight(3);
  fill(255,0,255)
image(this.image,0,0,this.radius, this.radius); 
   pop() }
}