class hammer{
constructor(){
var options = {
 "density":2,
 "friction":1.0,
 "restitution":0.5,
}
this.body=Bodies.rectangle(20,200,100,50,options);
this.width=100;
this.height=50;
World.add(world,this.body);
}
display(){
var pos=this.body.position
pos.x=mouseX
pos.y=mouseY
var angle=this.body.angle
push ()
translate(pos.x,pos.y);
rotate(angle)
fill("yellow")
stroke ("darkyellow")
rect(0,0,this.width,this.height);
pop ()
}
}