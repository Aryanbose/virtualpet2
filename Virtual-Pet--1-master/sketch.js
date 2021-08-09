//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImage,happyDogImage,foodObj;
var fedTime,lastFed,feed,addFood;
function preload()
{
	//load images here
  dogImage = loadImage ('images/dogImg.png')
  happyDogImage = loadImage('images/dogImg1.png')
}

function setup() {
  
  database = firebase.database();
  createCanvas(500,500);

  foodObj=new food();

  foodStock=database.ref('Food ');
  foodStock.on('value',readStock);

  dog = createSprite(225,225,10,10);
  dog.addImage(dogImage);
  dog.scale=0.5;  
  
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFood);


}


function draw() {  
background(46,139,87)
foodObj.display();
fedTime = database.ref("FedTime");
fedTime.on("value",function(data){
lastFed = data.val();
})


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)
}
fill(255,254)
textSize(15);
if(lastFed>12){
  text("Last feed : "+ lastFed%12 + " Pm",350,30);
  }else if(lastFed==0){
    text("Last feed : 12am",350,30);
  }else{
    text("Last Feed : "+ lastFed + " am",350,30);
  }

  drawSprites();
  //add styles here
  textSize(59);
  fill("Red")
  text(foodS,120,80);
  console.log (foodS)

}
//food s function
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}
//values function
function feedDog(){
  dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1;
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    fedTime:hour()
  })



  function addFood(){
    foodS++;
    database.ref('/').update({
      Food:foodS
    })
  }