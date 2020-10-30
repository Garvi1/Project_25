class Dustbin{
    constructor(x, y,radius) {
   
      this.image  = loadImage("PRO25_3.png");
      this.body = Bodies.circle(x, y, radius,{isStatic:true});
      this.radius = radius
     // this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
     // strokeWeight(4);s
        //stroke("green");
      fill("red");
      image(this.image,0, 0, this.radius,this.radius);
      pop();
    }
  };
  