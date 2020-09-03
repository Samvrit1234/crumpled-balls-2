class Paper{
    constructor(x, y){
   var options = {
       isStatic : true,
       restitution: 0.3,
       density : 1.2
   }

       this.body = Bodies.circle(x, y,50,options);
       this.image = loadImage("MatterJSBoilerPlate-master/paper.png");
      

       World.add(world,this.body);

  
    }
    display(){
       fill("pink")
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,20,20);
    }
} 