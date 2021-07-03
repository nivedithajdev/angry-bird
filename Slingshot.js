class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        // constraint is a force which helps you in coming back to its original position
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        //attching slingshot with the bird
        this.sling.bodyA = body;
    }
    
    fly(){
        //whenever slingshot is left bird will fly
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            //point A and point B are two sides of the chain
            var pointA = this.sling.bodyA.position;
            //defining one side of chain which can move anywhere
            var pointB = this.pointB;
            push();
            
            //giving colour shades to the object
            stroke(48,22,8);

            // improving a condition for the movement of angry bird
            if(pointA.x < 220) {
                //giivng a weight to the object 
                strokeWeight(7);
                //joining multiple lines to make slingshot
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                // weight to the object
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            //resetting 
            pop();
        }
    }
    
}