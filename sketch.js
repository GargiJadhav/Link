var form,game,gameState=0,state = "start";
var bg,bg1,bg2,button_img,backgroundImg,background1,background2,background3,fridge1,fridge_img;
var gargi_img,gargi,fallen_gargi;
var button;
var menu;
var fridge2,fridge3,fridge4,fridge5,gargi2_img;
var vanilla,vanillaImg,chocolate,chocolateImg,mango,mangoImg,kesarPista,kesarPistaImg,strawberry,strawberryImg;
var left,right,bottom,top1,invisbletop1;
var next1,buy1,next2,buy2,next3,buy3,next4,buy4,next5,buy5;
var rect1,rect2,rect3,rect4,rect5,rectImg,rectImg2,rectImg3,rectImg4,rectImg5
var nextImg,next2Img,next3Img,next4Img,next5Img,buyImg,buy2Img,buy3Img,buy4Img,buy5Img;
var invisibleTheif;
var playingBg,playingImg;
var quantity = 0;
var box,baby,money,banana;
var ground;
var boxGroup;
function preload(){
bg = loadImage("Images/bg.jpg");
gargi_img = loadAnimation("Images/frock1.png","Images/frock2.png","Images/frock3.png","Images/frock4.png","Images/frock5.png");
bg3 = loadImage("Images/supermarket.jpg");
bg4 = loadImage("Images/bg4.jpg");
button_img = loadImage("Images/start.png");
backgroundImg = loadImage("Images/Background.jpg");
fridge_img = loadImage("Images/fridge.png");
rectImg = loadImage("Images/RECT.png");
vanillaImg = loadImage("Images/vanilla.png");
gargi2_img = loadAnimation("Images/frock1.png","Images/frock2.png","Images/frock3.png");
rectImg2 = loadImage("Images/chocolate.png");
rectImg3 = loadImage("Images/kesar.png");
rectImg4 = loadImage("Images/mango.png");
rectImg5 = loadImage("Images/strawberry.png");
chocolateImg = loadImage("Images/chocolate.jpg");
kesarPistaImg = loadImage("Images/kesarPista.png");
mangoImg = loadImage("Images/wow.png");
strawberryImg = loadImage("Images/strawberry1.png");
nextImg = loadImage("Images/next.jpg");
next2Img = loadImage("Images/next.jpg");
next3Img = loadImage("Images/next.jpg");
next4Img = loadImage("Images/next.jpg");
next5Img = loadImage("Images/next.jpg");
buyImg = loadImage("Images/buy.png");
buy2Img = loadImage("Images/buy.png");
buy3Img = loadImage("Images/buy.png");
buy4Img = loadImage("Images/buy.png");
buy5Img = loadImage("Images/buy.png");
theif_Img = loadAnimation("Images/theif.png","Images/theif2.png","Images/theif3.png","Images/theif4.png","Images/theif5.png","Images/theif6.png");
playingImg = loadImage("Images/playingBg.jpg");
baby = loadImage("Images/baby.png");
boxImg = loadImage("Images/box.png");
boxImg2 = loadImage("Images/box2.png");
boxImg3 = loadImage("Images/box3.png");
fallen_gargi = loadAnimation("Images/kidWalking1.jpg");
}



function setup(){
    createCanvas(displayWidth,displayHeight-50);
form = new Form();
game = new Game();
theifObj = new Theif();
playingBg = createSprite(width/2,height/2-100);
playingBg.addImage(playingImg);
playingBg.visible = false;
background1 = createSprite(width/2-420,height/2,width,height);
  background1.addImage(backgroundImg);
  background1.visible = false;
  background2 = createSprite(width/2+400,height/2,width,height);
  background2.addImage(backgroundImg);
  background2.visible = false;
  background3 = createSprite(width/2+200,height/2,width,height);
  background3.addImage(backgroundImg);
  background3.visible = false;
 boxGroup = createGroup();
 gargi = createSprite(width/2-500,600,20,20);
  //gargi.addAnimation("gargiWalking",gargi_img);
  gargi.addAnimation("gargi",gargi2_img);
  gargi.addAnimation("fallen_gargi",fallen_gargi);
  gargi.scale = 0.7;
  gargi.visible = false;
 
    fridge1 = createSprite(width/2-550,150,100,50);
    fridge1.addImage(fridge_img);
    fridge1.scale = 0.7;
    fridge1.visible = false;

    fridge2 = createSprite(width/2-100,150,100,50);
    fridge2.addImage(fridge_img);
    fridge2.scale = 0.7;
    fridge2.visible = false;
    fridge2.debug = true;

    fridge3 = createSprite(width/2+400,150,100,50);
    fridge3.addImage(fridge_img);
    fridge3.scale = 0.7;
    fridge3.visible = false;
    fridge3.debug = true;

    fridge4 = createSprite(width/2+150,600,100,50);
    fridge4.addImage(fridge_img);
    fridge4.scale = 0.7;
    fridge4.visible = false;
    fridge4.debug = true;

    fridge5 = createSprite(width/2-380,600,100,50);
    fridge5.addImage(fridge_img);
    fridge5.scale = 0.7;
    fridge5.visible = false;
    fridge5.debug = true;
   
left = createSprite(0,width/2-420,10,height+20);
left.shapeColor = "black";
top1 = createSprite(width/2,0,displayHeight+720,10);
top1.shapeColor= "black";
bottom = createSprite(width/2,685,displayHeight+720,10);
bottom.shapeColor = "black";
bottom.visible = false;



rect1 = createSprite(width/2,340,width-500,height);
 rect1.addImage(rectImg);
 rect1.visible = false;
 vanilla = createSprite(width/2,340,50,50);
 vanilla.addImage(vanillaImg);
 vanilla.visible = false;
 next1 = createSprite(width/2+350,550,50,50);
 next1.visible = false;
 next1.addImage(nextImg);
 next1.scale = 0.5;
 buy1 = createSprite(width/2+350,350,50,50);
 buy1.visible = false;
 buy1.addImage(buyImg);


 rect2 = createSprite(width/2,340,width-500,height);
 rect2.addImage(rectImg2);
 rect2.visible = false;
 chocolate = createSprite(width/2,340,50,50);
 chocolate.addImage(chocolateImg);
 chocolate.visible = false;
chocolate.scale = 1.5;
 next2 = createSprite(width/2+300,550,50,50);
 next2.visible = false;
 next2.addImage(next2Img);
 next2.scale = 0.5;
 buy2 = createSprite(width/2+350,300,50,50);
 buy2.visible = false;
 buy2.addImage(buy2Img);
 buy2.debug = true;

 rect3 = createSprite(width/2,340,width-500,height);
 rect3.addImage(rectImg4);
 rect3.visible = false;
 //rect3.scale = 0.7;
 mango = createSprite(width/2,340,50,50);
 mango.addImage(mangoImg);
mango.visible = false;
mango.scale = 0.5;
 next3 = createSprite(width/2+350,550,50,50);
 next3.visible = false;
 next3.addImage(next3Img);
 next3.scale = 0.5;
 buy3 = createSprite(width/2+350,400,50,50);
 buy3.visible = false;
 buy3.addImage(buy3Img);


 rect4 = createSprite(width/2,340,width-500,height);
 rect4.addImage(rectImg3);
 rect4.visible = false;
 kesarPista = createSprite(width/2,340,50,50);
 kesarPista.addImage(kesarPistaImg);
kesarPista.visible = false;
 next4 = createSprite(width/2+350,550,50,50);
 next4.visible = false;
 next4.addImage(next4Img);
 next4.scale = 0.5;
 buy4 = createSprite(width/2+350,250,50,50);
 buy4.visible = false;
 buy4.addImage(buy4Img);


 rect5 = createSprite(width/2,340,width-500,height);
 rect5.addImage(rectImg5);
 rect5.visible = false;
 strawberry = createSprite(width/2,340,50,50);
 strawberry.addImage(strawberryImg);
 strawberry.visible = false;
 strawberry.scale = 0.5;
 next5 = createSprite(width/2+350,550,50,50);
 next5.visible = false;
 next5.addImage(next5Img);
 next5.scale = 0.5;
buy5 = createSprite(width/2+350,350,50,50);
 buy5.visible = false;
 buy5.addImage(buy5Img);
 
 invisibleTheif = createSprite(1152,365,20,20);
 invisibleTheif.visible = false;







theif = createSprite(1162,365,50,50);
theif.addAnimation("theif",theif_Img);
theif.visible = false;
theif.mirrorX(-1);
theif.scale = 0.5;

}



function draw(){
    gargi.bounceOff(left);
    gargi.bounceOff(top1);
    gargi.bounceOff(bottom);
    gargi.bounceOff(fridge1);
    gargi.bounceOff(fridge2);
    gargi.bounceOff(fridge3);
    gargi.bounceOff(fridge4);
    gargi.bounceOff(fridge5);
    console.log(gargi.y);

    if(gameState == 0){
        form.display();
     
    }
    else if(gameState==1){

        clear();
game.start();

    }
    else if(gameState==2){
        clear();
        theifObj.display();

    }
    //console.log(next2.x);
   
drawSprites();

}
function spawnObstacles(){
    if(frameCount%300===0){
        box = createSprite(width,height-100,40,40);
        box.velocityX = -5;
        box.scale = 0.3;
var r = round(random(1,3));
switch(r){
    case 1 : box.addImage(boxImg);
    break;
    case 2 : box.addImage(boxImg2);
    break;
    case 3 : box.addImage(boxImg3);
    break;
   default: break;
}
box.lifetime = 2000;
boxGroup.add(box);
    }
}
function stop(){
    ground.velocityX = 0;
    playingBg.velocityX = 0;
    box.destroy();
    state = "stop";
}