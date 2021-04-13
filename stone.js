class stone{
    constructor(){
    var options = {
     "density":30,
     "friction":1.0,
     "restitution":0.8,
    }
    this.body=Bodies.rectangle(200,200,200,200,options);
    this.width=100;
    this.height=100;
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push ()
    translate(pos.x,pos.y);
    rotate(angle)
    fill("black")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop ()
    }
    }