const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    Engine.update(engine);

    // add condition to check if any background image is there to add


    
    if(backgroundImg){
        background(backgroundImg)
        }
    
        text("Time : " + hour,100,100)
    


    // write code to display time in correct format here
    

}




async function getBackgroundImg(){
    var response =  await fetch("http://worldtimeapi.org/api/timezone/Asia/tokyo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    
    if(hour>=06 && hour<=08){
        bg = "sprites/sunrise1.png";
    }

    else if(hour>=08 && hour<=10){
        bg = "sprites/sunrise2.png";
    }

    else if(hour>=10 && hour<=12){
        bg = "sprites/sunrise3.png";
    }

    
    else if(hour>=12 && hour<=14){
        bg = "sprites/sunrise4.png";
    }

    
    else if(hour>=14 && hour<=15){
        bg = "sprites/sunrise5.png";
    }

    
    else if(hour>=15 && hour<=16){
        bg = "sprites/sunrise6.png";
    }

    
    else if(hour>=16 && hour<=17){
        bg = "sprites/sunset7.png";
    }

        
    else if(hour>=17 && hour<=18){
        bg = "sprites/sunset8.png";
    }

    else if(hour>=18 && hour<=19){
        bg = "sprites/sunset9.png";
    }

    else if(hour>=19 && hour<=20){
        bg = "sprites/sunset10.png";
    }

    
    else if(hour>=20 && hour<=23){
        bg = "sprites/sunset11.png";
    }

    else{
        bg = "sprites/sunset12.png";
    }

    backgroundImg = loadImage(bg);
    
}