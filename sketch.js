var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, leafImg, orangeLeaf;
var apple, appleImg;

var rand_sprite;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeaf = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
//background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX

  rand_sprite = Math.round(random(1, 2));
  if(rand_sprite==1){
    createLeaves();
    rand_sprite = Math.round(random(1, 2));
  }
  else if(rand_sprite==2){
    createApples();
    rand_sprite = Math.round(random(1, 2));
    
  }
  
drawSprites();
}

function createApples(){
  // giving framecount for random appearence
if(frameCount%80 === 0){
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 2;
  apple.depth = rabbit.depth
  rabbit.depth ++
  apple.lifetime = 100;
 }
}
function createLeaves(){
  if(frameCount%80===0){
    leaf = createSprite(random(50, 350), 40, 10, 10);
    var leafImgs = Math.round(random(1,2));
    if(leafImgs==1){
      leaf.addImage(leafImg)
      leafImgs = Math.round(random(1,2));
    }
    else if(leafImgs==2){
      leaf.addImage(orangeLeaf);
      leafImgs = Math.round(random(1,2));
    }
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.depth = rabbit.depth;
    rabbit.depth ++;
    leaf.lifetime = 100
  
  }
}


