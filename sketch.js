// constant is like a memory
//Engine -the object on which physics conditions are applied
//World - physical world to the object 
//Body -physical body to the object


//eg - inisde solar syastem we are creating the earth 
//Engine will be the iniverse , engine will be earth like 
const Engine = Matter.Engine;


//matter.world- referring it to the matter.js library
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//creating object with the help of variable
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;



// for giving images 
function preload() {
    //getting th background according to the time zone
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    //eg creating earth by using properties of the universe 
    engine = Engine.create();
    //adding a world to the object
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);

    //PI stands for 180 degree
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    //giivng exact position for the object 
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    //updatting the changes which happens inside the object
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(bird.body.speed);    
}


//dragging the mouse to drag the angry bird
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
    //}
}

//leaving the mouse to let the angry bird fly 
function mouseReleased(){
    slingshot.fly();

    //changing game state to launch 
    gameState = "launched";
}

//command for using keys to make it work 
function keyPressed(){
    //32 stands for space key, setting speed as maximum 1
    if(keyCode === 32 && bird.body.speed < 1){
        //creating trajectory for the bird
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       
       //attaching angry bird with slingshot
       slingshot.attach(bird.body);
    }
}

//asysnc which stop it from reading the data on its own , so that it was be shown only once on screen
async function getBackgroundImg(){
    //going to websit eand waiting for response
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    

    //reading the webside in the format in which its wrtten 
    var responseJSON = await response.json();

    //giving the date,time according to the json format
    var datetime = responseJSON.datetime;
    //slice will help in splitting the time 
    var hour = datetime.slice(11,13);
    

    //giving condition for time zones
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);

    //to find errors 
    console.log(backgroundImg);
}