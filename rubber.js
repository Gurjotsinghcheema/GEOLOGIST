class rubber{
    constructor(){
    var options = {
     "density":1,
     "friction":5,
     "restitution":0.1,
    }
    this.body=Bodies.circle(400,200,50,options);
    this.r=70;
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push ()
    translate(pos.x,pos.y);
    rotate(angle)
    fill("blue")
    ellipseMode(CENTER)
    ellipse(0,0,this.r,this.r);
    pop ()
    }
    }