//  CompSci One Start Code
let cellDim = 25;
let cellCount;
let snake;
let food;
let direction;
let size;
let btnPlay, btnInst, btnAgain;
let gameState = 1;
let showInst = false;
let foodFound, foodSnake;
let playerName;
let start = 0;
let sound;
let sound1;
let sound2;
let sound3;
let coinIMG = [];
let time;
let count;
let cnv;

function preload() {
  img1 = loadImage("images/gr.jpg");
  img2 = loadImage("images/co.gif");
  img3 = loadImage("images/title.JPG");
  img4 = loadImage("images/bri.jfif");
  img5 = loadImage("images/gold.gif");
  img6 = loadImage("images/lego-removebg-preview.png");
  img7 = loadImage("images/qqqq.gif");
  img8 = loadImage("images/legoman.png");
  sound = loadSound("sounds/tt.mp3");
  sound1 = loadSound("sounds/break.mp3");
  sound2 = loadSound("sounds/clic.mp3");
  sound3 = loadSound("sounds/band.mp3");
  sound4 = loadSound("sounds/music.mp3");
}

function setup() {
  var cnv = createCanvas(800, 800);
  let cd = document.getElementById("cnvDiv");
  cnv.parent(cd);
  loadGame(); //using the loadGame function
  snake = new Snake(100, 400, color(0, 150, 255));
  food = new Food(100, 200, color(255, 50, 50));
  //creating the play button,instruction button, again button, snake, and food
  size = 3;
}

function loadGame() {
  start = 0;
  gameState = 1;
  cellCount = width / cellDim;
  score = 0;
  snake = new Snake(100, 400, color(0, 150, 255));
  food = new Food(100, 200, color(255, 50, 50));
  direction = 0;
  document.getElementById("playerName").innerText = score;
  count = 0;
  time = 0;
  //restarts snake and food location, the score, makes the snake stay still, and the food be random, and putting the game back to the start screen
}

function draw() {
  background(100);
  image(img3, 100, 100);
  frameRate(15); //frames per second
  //drawing the snake and food function
  if (gameState === 1) {
    startGame(); //if the gamestate is 1 do all the stuff in the start game function
  } else if (gameState === 2) {
    playGame(); //if its gamestate 2 do stuff from playgame function
  } else if (gameState === 3) {
    endGame(); //if gamestate is 3 do stuff from endgame function
  } else {
    console.log("incorrect game state"); //if its not any of the 3 gamestates we get a notifacation telling us something is wrong
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    direction = 3;
  } //if the left arrow is pressed use the code about direction 3
  if (keyCode === RIGHT_ARROW) {
    direction = 1;
  } //if the right arrow is pressed use the code about direction 1
  if (keyCode === UP_ARROW) {
    direction = 4;
  } //if the up arrow is pressed use the code about direction 4
  if (keyCode === DOWN_ARROW) {
    direction = 2;
  } //if the down arrow is pressed use the code about direction 2
  if (
    keyCode === RIGHT_ARROW ||
    keyCode === LEFT_ARROW ||
    keyCode === DOWN_ARROW ||
    keyCode === UP_ARROW
  ) {
    if (start === 0) {
      start = 1;
    }
  }
}




function startGame() {
  background(img1);
  image(img3, 0, 0, 800, 150);
  image(img8, 400, 400);
  //loading the play and instruction button into the first gamestate
  if (showInst === true) {
    fill(50, 50, 255);
    rect(100, 100, 300, 500);
    fill(255);
    textSize(40);
    text("pick up studs", 100, 200);
    text("don't touch wall", 100, 300);
    text("don't collide with yourself", 100, 400);
  } //if the instruction button is clicked create a blue rectangle with insturctions for the game
  // fill(255);
  //textSize(60);
  //text("Snake Game", 200, 100);
  //just creating the title of the game
}
function playGame() {
  count++;
  if(count % 15 === 0) {
    time++;
    count = 0;
    document.getElementById("timeTile").innerHTML = time;
  }
  background(img1);
  //sound3.play(1);
  snake.run();
  food.run();
  //loading the snake and food function for the second gamestate
} ////////////////////////////////////////////////////////////////////////////// end on play game

function endGame() {
  background(255, 50, 50);
  image(img5, 220, 260, 50, 50);
  //loading the restart button into the 3rd gamestate
  let endString = getEndMessage();
  fill(0);
  textSize(30);
  text(endString, 100, 300);
  function getEndMessage() {
    if (score < 3) {
      //if the score is ___ then you get a certain message
      //if not then you get a different message on different the score
      str = "u suck: " + score;
    } else if (score < 5) {
      str = "u bad: " + score;
    } else if (score < 10) {
      str = "u better: " + score;
    } else if (score < 15) {
      str = "u good: " + score;
    } else if (score < 20) {
      str = "u great: " + score;
    } else if (score < 25) {
      str = "u cool: " + score;
    } else if (score < 30) {
      str = "ur the man: " + score;
    } else if (score < 35) {
      str = "ur the coolest: " + score;
    } else if (score < 40) {
      str = "omg u cracked: " + score;
    } else if (score < 45) {
      str = "wow: " + score;
    } else if (score < 50) {
      str = "[Load Dialog WOW]: " + score;
    } else if (score < 55) {
      str = "bro outside now: " + score;
    } else if (score < 60) {
      str = "dang u still going?: " + score;
    } else if (score < 65) {
      str = "(No Grass?) : " + score;
    } else if (score < 70) {
      str = "holy mole: " + score;
    } else if (score < 75) {
      str = "skibidi pro: " + score;
    } else if (score < 80) {
      str = "stop: " + score;
    } else if (score < 85) {
      str = "help me: " + score;
    } else if (score < 90) {
      str = "not even geo can get this: " + score;
    } else if (score < 95) {
      str = "u failed: " + score;
    } else {
      str = "ima outta here f u: " + score;
    }
    return str;
  }
}
