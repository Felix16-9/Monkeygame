var PLAY=1
var END=0;
var gameState=PLAY
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  //creating monkey
  monkey=createSprite(80,150,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,200,600,20)
  ground.x=ground.width /2;
 
  
  invisibleGround=createSprite(200,200,400,10)
  invisibleGround.visible=false
  
  //create Obstacle and Food Groups
  obstaclesGroup=createGroup();
  FoodGroup=createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug=true
  
  score=0;
}


function draw() {
background(190)
  if(gameState===PLAY){
    if(ground.x<0){
    ground.x=ground.width/2
  }
   ground.velocityX=-4
console.log(ground.x)
  

  if (keyDown("space")&&monkey.y>=90){
    monkey.velocityY=-13
  }
  monkey.velocityY=monkey.velocityY+0.8
 
  SurvivalTime=Math.ceil(frameCount/frameRate())
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black")
  Survivaltime=Math.ceil(frameCount/frameRate())  
  text("Survival Time:"+SurvivalTime,200,50)
  
  spawnBananas()
    spawnObstacles()
  if(obstaclesGroup.isTouching(monkey)){
    gameState=END
  }
  }
  monkey.collide(invisibleGround)
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%300===0){
     obstacle=createSprite(400,165,10,40);
     obstacle.scale=0.5
    obstacle.velocityX=-3
    obstacle.lifetime=300
    obstaclesGroup.add(obstacle)
  
}
}

function spawnBananas(){
  if(frameCount%80===0){
    Banana=createSprite(400,145,10,40);
    Banana.addImage(bananaImage);
    Banana.scale=0.1
    Banana.velocityX=-3
    Banana.lifetime=130;
    FoodGroup.add(Banana)
  }
}

