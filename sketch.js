
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
   backgroundImage = loadImage("Ground.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas (600,500)
  
   background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2

  invisibleGround = createSprite(250,265,500,10);
  invisibleGround.visible = false;
  
  
 bananaGroup= new Group();
  stoneGroup= new Group ();
monkey=createSprite(80,230,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.12
}


function draw() {
background.velocityX = -4
  if(background.x<0){
    background.x= background.width/2
  }
  console.log(background.x)
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        }
  
 
  
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide (invisibleGround)
  food();
  obstacles();
  drawSprites();
  
  var survivalTime=0;
  
  stroke ("white")
  textSize(20)
  fill ("black")
  text ("Score: " + score, 450,20)
  
  stroke("white")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,20)
}

function food(){
  
  if (frameCount % 80 === 0){
  var banana = createSprite(100,100,20,20);
  banana.x= Math.round(random(100,400));
    banana.addImage (bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    banana.lifetime = 200;
    bananaGroup.add(banana);
 
  }

}

function obstacles(){
 if (frameCount % 300 === 0){
  var stone = createSprite(200,230,20,20);
  stone.x= Math.round(random(100,400));
    stone.addImage (obstaceImage)
    stone.scale=0.21
    stone.velocityX=-4
   stone.lifetime = 200;
   stoneGroup.add(stone)
 
  }

  
  
}


