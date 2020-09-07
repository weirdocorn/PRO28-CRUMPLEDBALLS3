class Paper {
    constructor(x, y, r) {
      var options = {
          restitution:0.3,
          friction:0,
          density:1.2,
          isStatic:false
          

      }
      this.x=x;
     this.y=y;
      this.r=r;
      this.paperimage=loadImage("paper.png")
     
      
      this.body = Bodies.circle(this.x, this.y,this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
     
      push();
      
      translate(paperpos.x, paperpos.y);
     
      rectMode(CENTER);
       
      
      fill("blue")
      image(this.paperimage,50,-20,this.r,this.r)
      pop();
   
    }
  };