class Ground {
  constructor(x,y,width,height) {
    // section where libraries are used
    var options = {
      //making the ground stationary and stable 
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //keeping the object in between the rectangle
    rectMode(CENTER);
    //to give colour 
    fill("brown");
    //defining the rectangle
    rect(pos.x, pos.y, this.width, this.height);
  }
};
