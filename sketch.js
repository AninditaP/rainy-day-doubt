const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var rain=[];
var thunderCreatedFrame;

function preload(){
    img1=loadImage("thunderbolt/1.png");
    img2=loadImage("thunderbolt/2.png");
    img3=loadImage("thunderbolt/3.png");
    img4=loadImage("thunderbolt/4.png");
    
}

function setup(){
 createCanvas(800,1200)   
 engine = Engine.create();
 world = engine.world;
    
}

function draw(){

    background("black");
    Engine.update(engine);
   
    if(frameCount%5===0)
    {
        rain.push(new Particle(random(1,200),-10,5))
    }
    if(frameCount%5===0)
    {
        rain.push(new Particle(random(200,400),-10,5))
    }

    if(frameCount%5===0)
    {
        rain.push(new Particle(random(400,600),-10,5))
    }
    if(frameCount%5===0)
    {
        rain.push(new Particle(random(600,800),-10,5))
    }
    for (var x= 0; x< rain.length; x++) 
    { 
        rain[x].display();
        rain[x].update();
    }  
   
    if(frameCount%120===0){
        rand = Math.round(random(1,4)); 
        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(200,600),random(100,200),10,10);
       switch(rand){
           case 1: thunder.addImage(img1);
           break;
           case 2: thunder.addImage(img2);
           break;
           case 3: thunder.addImage(img3);
           break;
           case 4: thunder.addImage(img4);
           break;
           default:break;
       }
    }
    if(thunderCreatedFrame+12===frameCount && thunder){
        thunder.destroy();
    }

   var options={
       isStatic:true
   }
    var  ball = Bodies.circle(400,400,300,options);
    fill("white")
    ellipse(ball.position.x,ball.position.y,300,300);
console.log(ball);





  drawSprites();
}   



