var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  init: function(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext(`2d`);
    this.start();
  },

  start: function() {
    this.fps = 60;

    this.reset();

    this.interval = setInterval(() => {
      this.clear();
      this.framesCounter++;

      if (this.framesCounter > 2000) {
        this.framesCounter = 0;
      }
      

      this.drawAll();
    });
  },

  reset: function() {
    this.background = new Background (this.ctx);
    this.backgroundmoves = new BackMoves (this.ctx)
    this.player1 = new Player1(this.ctx)
    this.player2 = new Player2(this.ctx)
    // this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    this.framesCounter = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function() {
    this.background.draw(this.framesCounter);
    this.backgroundmoves.draw(this.framesCounter)
    this.player1.draw(this.framesCounter)
    this.player2.draw(this.framesCounter)
  },
}




// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//       this.sound.play();
//     }
//     this.stop = function(){
//       this.sound.pause();
//     }
//   }

