class Food {
  constructor(x, y, clr) {
    this.clr = clr//parameters
    this.loc = createVector(x, y)

    this.run = function () {
      this.render()
      this.check()
    }
    this.render = function () {//making color and shape of food
      //fill(this.clr)
      image(img2, this.loc.x, this.loc.y, cellDim, cellDim)
    }
    //check to see if the food at the same spot as snake
    //if yes go to new location
    this.check = function () {
      if (this.loc.x === snake.segment[0].x && this.loc.y === snake.segment[0].y) {
       foodFound = 0
       sound.play()
       //while loop for finding a newlocation for food
       while (foodFound === 0) {
         foodSnake = 0
        this.loc.x = floor(random(cellCount)) * cellDim
        this.loc.y = floor(random(cellCount)) * cellDim
        for (let i = snake.segment.length - 1; i > 0; i--) {
         if (this.loc.x === snake.segment[i].x && this.loc.y === snake.segment[i].y) {
            //if any part of the snake is overlapping the variable changes to show that and it resets the while loop and looks for another location
            foodSnake = 1
          }
         }
        if (foodSnake === 0) {
           foodFound = 1
         }
       }
       score = score + 1
      snake.segment.push(createVector(snake.segment[snake.segment.length - 1].x, snake.segment[snake.segment.length - 1].y))
      document.getElementById("score").innerText = score;
     }
   }
 }
}

