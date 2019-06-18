class Player1 {
  constructor(ctx, keys) {
    this.ctx = ctx;
    this.keys = keys;
    this.states = {
      left: false,
      right: false
    };
    this.startPointX = 200;
    this.startPointY = 150;

    // Idle Image
    this.imgIdlep1 = new Image();
    this.imgIdlep1.src = "./img/ken_idle.png";
    this.kenIdleX = 188;
    this.kenIdleY = 92;
    this.imgIdlep1.frames = 4;
    this.imgIdlep1.frameIndex = 0;

    // Walk Image
    this.imgWalkp1 = new Image();
    this.imgWalkp1.src = "./img/ken_walk.png";
    this.kenWalkX = 235;
    this.kenWalkY = 92;
    this.imgWalkp1.frames = 5;
    this.imgWalkp1.frameIndex = 0;
  }

  draw(framesCounter) {
    if (this.states.left || this.states.right) {
      this.drawWalk(framesCounter);
    } else {
      this.drawIdle(framesCounter);
    }
  }

  drawIdle(framesCounter) {
    this.ctx.drawImage(
      this.imgIdlep1,
      this.imgIdlep1.frameIndex *
        Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      0,
      Math.floor(this.kenIdleX / this.imgIdlep1.frames),
      this.kenIdleY,
      this.startPointX,
      this.startPointY,
      this.kenIdleX / 1.5,
      this.kenIdleY * 2.5
    );

    this.animateImgIdle(framesCounter);
  }

  animateImgIdle(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 40 === 0) {
      this.imgIdlep1.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgIdlep1.frameIndex > 2) this.imgIdlep1.frameIndex = 0;
    }
  }

  drawWalk(framesCounter) {
    this.ctx.drawImage(
      this.imgWalkp1,
      this.imgWalkp1.frameIndex *
        Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      0,
      Math.floor(this.kenWalkX / this.imgWalkp1.frames),
      this.kenWalkY,
      this.startPointX,
      this.startPointY,
      this.kenWalkX / 2,
      this.kenWalkY * 2.5
    );

    this.animateImgWalk(framesCounter);
  }

  animateImgWalk(framesCounter) {
    if (framesCounter % 40 === 0) {
      this.imgWalkp1.frameIndex += 1;

      if (this.imgWalkp1.frameIndex > 4) this.imgWalkp1.frameIndex = 0;
    }
  }

  move() {
    if (this.states.left) {
      this.startPointX -= 1;
    }
    if (this.states.right) {
      this.startPointX += 1;
    }
  }
}

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

//   class kenMoves extends Player1 {
//       constructor(ctx) {
//           super(ctx)
//           this.imgWalkp1 = new Image()
//           this.imgpl1walk.src = "./img/ken_walk.png"
//           this.kenWalkX = 235
//           this.kenWalkY = 92
//           this.imgpl1walk.frames = 5
//           this.imgpl1walk.frameIndex = 0
//       }

//       draw(framesCounter) {
//         this.ctx.drawImage(
//           this.imgpl1walk,
//           this.imgpl1walk.frameIndex *
//             Math.floor(this.kenWalkX / this.imgpl1walk.frames),
//           0,
//           Math.floor(this.kenWalkX/ this.imgpl1walk.frames),
//           this.kenWalkY,
//           400,
//           150,
//           this.kenWalkX / 2,
//           this.kenWalkY * 2.5
//         );

//         this.animateImg(framesCounter);
//       }

//       animateImg(framesCounter) {
//         // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
//         if (framesCounter % 25 === 0) {
//           this.imgpl1walk.frameIndex += 1;

//           // Si el frame es el último, se vuelve al primero
//           if (this.imgpl1walk.frameIndex > 2) this.imgpl1walk.frameIndex = 0;
//         }
//       }
//   }
