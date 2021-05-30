class Theif{
constructor(){



}
display(){
    //background(playingImg);
    if(state==="start"){

    
playingBg.visible = true;
playingBg.velocityX = -2;
ground = createSprite(width/2,height-50,width,50);
ground.velocityX = -2;

 theif.x = width/2;
 theif.y = height/2+250;
 gargi.x = 100; 
 gargi.y = height/2+255;
 gargi.depth = theif.depth;
 console.log(gargi.x);
 spawnObstacles();
 if(keyDown("space")){
  
  gargi.y = gargi.y-300;
    //gargi.addAnimation(gargi_img);
  }
  if(boxGroup.isTouching(gargi)){
   gargi.changeAnimation("fallen_gargi",fallen_gargi);
  stop();
if(mousePressedOver(gargi)){
  state = "start";
  
}
  }

//gargi.velocityY = gargi.velocityY+0.2;
//gargi.collide(ground);
//theif.velocityY = theif.velocityY+0.8;
theif.collide(ground);

    }


   }

}