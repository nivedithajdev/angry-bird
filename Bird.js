//blueprint of creating a bird
//extends is used for referring it to parent file which is baseclass
class Bird extends BaseClass {
  constructor(x,y){
    // used for extracting the data from parent file
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //path followed by the object 
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    // displaying the complete object including the parent file feature
    super.display();

    //creating clouds like trajectory in screen by giving a limit for position 
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      // insert all the changing positions
      this.trajectory.push(position);
    }
   
// to keep on creating the clouds on screen with the help of for condition 
    for(var i=0; i<this.trajectory.length; i++){
      //  []  array used for creating a larger storage
      // first value is counted as zero
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
