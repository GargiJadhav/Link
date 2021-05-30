class Game{
constructor(){

}
start(){
   
    //background(0);
    background1.visible = true;
    background2.visible = true;
    background3.visible = true;
  gargi.visible = true;
  
  fridge1.visible = true;
  fridge2.visible = true;
  fridge3.visible = true;
  fridge4.visible = true;
  fridge5.visible = true;
  if(keyDown(RIGHT_ARROW)){
    gargi.x = gargi.x+8;
   
 }
 if(keyDown(LEFT_ARROW)){
  gargi.x = gargi.x-8;
 
}
if(keyDown(UP_ARROW)){
  gargi.y = gargi.y-8;
  //gargi.addAnimation(gargi_img);
}
if(keyDown(DOWN_ARROW)){
  gargi.y = gargi.y+8;
    //gargi.changeAnimation("gargiWalking",gargi_img);
 
 
}

if(mousePressedOver(fridge1)){
 rect1.visible = true;
vanilla.visible = true;
next1.visible = true;
buy1.visible = true;
rect1.x = width/2;
next1.x = width/2+350;
vanilla.x = width/2;
buy1.x = width/2+350;
} 
if(mousePressedOver(next1)){
  rect1.visible = false;
  vanilla.visible = false;
  next1.visible = false;
  buy1.visible = false;
  rect1.x = width/2+500;
  
}
if(mousePressedOver(buy1)){
  //icecream.scale = 2;
  vanilla.visible = true;
  quantity = quantity+1;
 

}

if(rect1.x === width/2+500){
  buy1.x = 5000;
  rect1.x = 3000;
  vanilla.x = 2000;
  next1.x = 1000
}
if(mousePressedOver(fridge2)){
  rect2.visible = true;
  chocolate.visible = true;
  next2.visible = true;
  buy2.visible = true;
  rect2.x = width/2;
  chocolate.x = width/2;
  next2.x = width/2+300;
  buy2.x = width/2+350;
}

if(mousePressedOver(next2)){
  rect2.visible = false;
  chocolate.visible = false;
  next2.visible = false;
  buy2.visible = false;
  rect2.x = width/2+500;
}
if(mousePressedOver(buy2)){
  //icecream.scale = 2;
  chocolate.visible = true;
  
}
if(rect2.x === width/2+500){
  buy2.x = 5000;
  rect2.x = 3000;
  chocolate.x = 2000;
  next2.x = 1000
}
if(mousePressedOver(fridge3)){
  rect3.visible = true;
  mango.visible = true;
  next3.visible = true;
  buy3.visible = true;
  rect3.x = width/2;
  mango.x = width/2;
  next3.x = width/2+350;
  buy3.x = width/2+350;
}   
if(mousePressedOver(next3)){
  rect3.visible = false;
  mango.visible = false;
  next3.visible = false;
  buy3.visible = false;
  rect3.x = width/2+500;
}
if(mousePressedOver(buy3)){
  //icecream.scale = 2;
  mango.visible = true;
 
}
if(rect3.x === width/2+500){
  buy3.x = 5000;
  rect3.x = 3000;
  mango.x = 2000;
  next3.x = 1000
}
if(mousePressedOver(fridge4)){
  rect4.visible = true;
  kesarPista.visible = true;
  next4.visible = true;
  buy4.visible = true;
  rect4.x = width/2;
  kesarPista.x = width/2;
  next4.x = width/2+350
  buy4.x = width/2+350;
}   
if(mousePressedOver(next4)){
  rect4.visible = false;
  kesarPista.visible = false;
  next4.visible = false;
  buy4.visible = false;
  rect4.x = width/2+500;
}
if(mousePressedOver(buy4)){
  //icecream.scale = 2;
  kesarPista.visible = true;
  
} 
if(rect4.x === width/2+500){
  buy4.x = 5000;
  rect4.x = 3000;
  kesarPista.x = 2000;
  next4.x = 1000
}
if(mousePressedOver(fridge5)){
  rect5.visible = true;
 strawberry.visible = true;
  next5.visible = true;
  buy5.visible = true;
  rect5.x = width/2;
  strawberry.x = width/2;
  next5.x = width/2+350;
  buy5.x = width/2+350;
}   
if(mousePressedOver(next5)){
  rect5.visible = false;
  strawberry.visible = false;
  next5.visible = false;
  buy5.visible = false;
  rect5.x = width/2+500;
}
if(mousePressedOver(buy5)){
  //icecream.scale = 2;
  strawberry.visible = true;
 
} 
if(rect5.x === width/2+500){
  buy5.x = 5000;
  rect5.x = 3000;
  strawberry.x = 2000;
  next5.x = 1000;
}
if(gargi.isTouching(invisibleTheif)){
  theif.visible = true;
  theif.velocityX = 8;

 }
 if(gargi.x>1500){
  
   fridge1.visible = false;
   fridge2.visible = false;
   fridge3.visible = false;
   fridge4.visible = false;
   fridge5.visible = false;

   buy1.destroy();
   buy2.destroy();
   buy3.destroy();
   buy4.destroy();
   buy5.destroy();
   next1.destroy();
   next2.destroy();
   next3.destroy();
   next4.destroy();
   next5.destroy();
   background1.destroy();
   background2.destroy();
   background3.destroy();
   gameState = 2;
   theif.display();
   left.destroy();
  
   top1.destroy();
   bottom.destroy();
 }



}}
