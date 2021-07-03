class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // displaying the pig with the help of visibility
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
     //to show complete object on screen 
    super.display();
   }
   else{
     //removing added world to the body
     World.remove(world, this.body);
     push();
     // decreasing the visibility to fade away the pig
     this.Visiblity = this.Visiblity - 5;
     // to balance all the colors on the sceen 
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  // increasing the speed inside the game
  score(){
    //setting a visibility limit
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};