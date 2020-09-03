class Dustbin{
    constructor(x, y, width, height){
   var options = {
       isStatic : true,
       restitution: 0.3,
       density : 1.2
   }

       this.body = Bodies.rectangle(x, y,width,height);
       this.width = width;
       this.height = height;
       this.image = loadImage("MatterJSBoilerPlate-master/dustbingreen.png");
      

       World.add(world,this.body);

  
    }
    display(){
       fill("white")
       rectMode(CENTER);

    }
} 