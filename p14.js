var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;
var arrowGroup, redB, greenB, blueB, pinkB;


function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");

  red_balloonImage = loadImage("red_balloon0.png");
   
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 
   arrowGroup= new Group(); 
   redB = new Group();
   greenB = new Group();
   pinkB  = new Group();
   blueB = new Group();  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies

   var select_balloon = Math.round(random(1,4));
   var select_balloon = random(1,4);
   var select_balloon = Math.round(random());
   var select_balloon = Math.round(random(1,4,2));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  } 

  if(arrowGroup.isTouching(redB)){
    console.log("red Balloon")
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score +1; //score +=1;
  }

  if(arrowGroup.isTouching(greenB)){
    console.log("green Balloon")
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score +3; //score+=3;
  }

  if(arrowGroup.isTouching(pinkB)){
    console.log("pink Balloon")
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1; //score+=1;
  
  }
  if(arrowGroup.isTouching(blueB)){
    console.log("blue Balloon")
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score +2; //score+=2
  }
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

 function redBalloon() {
   var red = createSprite(0,50, 10, 10);
   red.addImage(red_balloonImage);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   redB.add(red);
 }


 

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}
