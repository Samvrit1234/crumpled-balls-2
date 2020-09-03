class Ground{
    constructor(x, y, width, height){
   var options = {
       isStatic : true,
       restitution: 0.3,
       density : 1.2
   }

       this.body = Bodies.rectangle(x, y,width,height);
       this.width = width;
       this.height = height;
      

       World.add(world,this.body);

  
    }
    display(){
       fill("yellow")
       rectMode(CENTER);

    }
} 