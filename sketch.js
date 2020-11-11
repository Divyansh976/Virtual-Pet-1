//Create variables here
var dog, happyDog;
var Dog;
var database;
var foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
	createCanvas(500, 500);
  Dog = createSprite(250,350,50,50);
  Dog.scale = 0.2
  Dog.addImage(dog);
  
  
  
}


function draw() {  
  background(46,139,87)
  textSize(15)
  fill("white")
  stroke("blue")
  text("Food Remaining:"+foodS,20,30)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW))  {
    writeStock(foodS);
    Dog.addImage(happyDog)

  }

}

function readStock(data)  {
  foodS = data.val();

}

function writeStock(x)  {
  if(x<=0)  {
    x=0
  } else {
    x=x-1
  }

  database.ref("/").update({
    Food : x
  })
}