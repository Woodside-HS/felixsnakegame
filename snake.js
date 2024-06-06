class Snake {
  constructor(x, y, clr) {
    this.clr = clr;
    this.segment = []; //segments are an array
    this.segment[0] = createVector(x, y); //making the 3 starting segments that come default with playing in the array
    this.segment[1] = createVector(x, y); //
    this.segment[2] = createVector(x, y); //
    this.segment[3] = createVector(x, y); //

    this.run = function () {
      this.render();
      this.move();
      this.segments();
    };

    this.render = function () {
      for (let i = this.segment.length - 1; i >= 0; i--) {
        if (i === 0) {
          fill(15);
        } else {
          fill(15);
        } //if the segment is the first segment then its color is white
        //if not then its the color created in setup

        //rect(this.segment[i].x, this.segment[i].y, cellDim); //creates snake shape with segments
        image(img6, this.segment[i].x, this.segment[i].y, cellDim, cellDim);
      }
    };

    this.move = function () {
      if (direction === 1) {
        this.segment[0].x = this.segment[0].x + cellDim;
      } else if (direction === 4) {
        this.segment[0].y = this.segment[0].y - cellDim;
      } else if (direction === 3) {
        this.segment[0].x = this.segment[0].x - cellDim;
      } else if (direction === 2) {
        this.segment[0].y = this.segment[0].y + cellDim;
      } //if the head is direction ___ and dosent equal ___ then the y/x cordinate of the head dont hit the ball
      if (this.segment[0].x < 0 || this.segment[0].x >= 800) {
        gameState = 3;
        sound1.play()
      }
      if (this.segment[0].y < 0 || this.segment[0].y >= 800) {
        gameState = 3;
        sound1.play()
      } //if the y or x cordinate of the head hits the wall then go to endgame/gamestate 3
      if (start === 1) {
        for (let i = 1; i < this.segment.length; i++) {
          if (
            this.segment[0].x === this.segment[i].x &&
            this.segment[0].y === this.segment[i].y
          ) {
            //looping through tails segments and checking to see if its overlapping
            gameState = 3;
            sound1.play()
          }
        }
      }

      this.segments = function () {
        for (let i = this.segment.length - 1; i > 0; i--) {
          this.segment[i].x = this.segment[i - 1].x;
          this.segment[i].y = this.segment[i - 1].y;
        }
      };
    };
  }
}
