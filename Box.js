class Box{
  constructor(x, y, width, height) {
      var options = {
        restitution :0.3,
        friction :0.1, 
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
   
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if(this.body.speed <3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -1;
      pop();
      
    }
  }
}