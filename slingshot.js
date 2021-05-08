class Slingshot {
    constructor(body1 ,point2){
  
       var options ={
        
        bodyA:body1,
        pointB:point2,
        stiffness:0.05,
        length:5
       }
  
      this.bodyA = body1;
      this.pointB = point2;
  
      this.chain = Matter.Constraint.create(options);
      World.add(world,this.chain);
    }
    fly(){
      this.chain.bodyA = null

    }
    
    attach(body){
        this.chain.bodyA = body

    }

    display(){
  
      if(this.chain.bodyA){
         strokeWeight(3);
         line(this.bodyA.position.x,this.bodyA.position.y,
         this.pointB.x,this.pointB.y);
      }
  
    }
  
  }