// parent file with all the features
class BaseClass{
  //used for initializing the objects 
  constructor(x, y, width, height, angle) {
   // area which uses two libraries
    var options = {
      //bounciness of an object 
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      //creating a body with the help of a constructor
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      //adding a physical world to the object 
      //this is for constructor
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      // to track the change in positions
      push();
      //to update the chnaged positions
      translate(this.body.position.x, this.body.position.y);
      // giving angles inside the programe
      rotate(angle);
      //to keep the image in btw the screen no matter what is the canvas size
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      // reseting the position
      pop();
    }
}