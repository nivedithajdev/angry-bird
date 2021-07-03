class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    // defining the angles inside matter.js library
    Matter.Body.setAngle(this.body, angle);
  }
}