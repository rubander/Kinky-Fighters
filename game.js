var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  keys: {
    player1left: 65,
    player1right: 68,
    // player1up: 87,
    // player1down: 83,
    // player1hadouken: 90,
    // player1punch: 88,
    // player1kick: 67,

    player2left: 37,
    player2right: 39
    // player2up: 38,
    // player2down: 40,
    // player2hadouken: 73,
    // player2punch: 79,
    // player2kick: 80,
  },
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
      this.listeners();
      this.drawAll();
      this.moveAll();
    });
  },

  reset: function() {
    this.background = new Background(this.ctx);
    this.backgroundmoves = new BackMoves(this.ctx);
    this.player1 = new Player1(this.ctx, this.keys);
    this.player2 = new Player2(this.ctx, this.keys);
    // this.player1walk = new kenMoves(this.ctx)
    // this.player = new Player(this.canvas.width, this.canvas.height, this.ctx, this.keys);
    this.framesCounter = 0;
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawAll: function() {
    this.background.draw(this.framesCounter);
    this.backgroundmoves.draw(this.framesCounter);
    this.player1.draw(this.framesCounter);
    this.player2.draw(this.framesCounter);
    // this.player1walk.draw(this.framesCounter)
  },

  moveAll: function() {
    this.player2.move();
    this.player1.move();
  },

  listeners: function (){
    document.addEventListener('keydown',(e)=>{
      if(e.keyCode === this.keys.player2left){
        this.player2.states.left = true
      }
      if(e.keyCode === this.keys.player2right){
        this.player2.states.right = true
      }
      if(e.keyCode === this.keys.player1left){
        this.player1.states.left = true
      }
      if(e.keyCode === this.keys.player1right){
        this.player1.states.right = true
      }

    })
    document.addEventListener('keyup',(e)=>{
      if(e.keyCode === this.keys.player2left){
        this.player2.states.left = false
      }
      if(e.keyCode === this.keys.player2right){
        this.player2.states.right = false
      }
      if(e.keyCode === this.keys.player1left){
        this.player1.states.left = false
      }
      if(e.keyCode === this.keys.player1right){
        this.player1.states.right = false
      }
    })

  }
};

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
