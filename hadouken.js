class Hadouken {
  constructor(ctx, startPointX, startPointPlayer) {
    this.ctx = ctx;
    this.startPointPlayer = startPointPlayer;
    this.startPointX = startPointX;
    this.startPointY = 200;
    this.yFrameAdjuster = 2.5;
    this.life = 100;

    // Idle Image
    this.imgHadou = new Image();
    this.imgHadou.src = "./img/hadouken.png";
    this.hadouX = 68;
    this.hadouY = 40;
    this.imgHadou.frames = 2;
    this.imgHadou.frameIndex = 0;

    // Impact Image
    this.imgHadouImpact = new Image();
    this.imgHadouImpact.src = "./img/hadouken-impact.png";
    this.hadouImpactX = 84;
    this.hadouImpactY = 40;
    this.imgHadouImpact.frames = 4;
    this.imgHadouImpact.frameIndex = 0;
  }

  drawMoving(framesCounter) {
    this.ctx.drawImage(
      this.imgHadou,
      this.imgHadou.frameIndex * Math.floor(this.hadouX / this.imgHadou.frames),
      0,
      Math.floor(this.hadouX / this.imgHadou.frames),
      this.hadouY,
      (this.startPointX += 3.5),
      this.startPointY,
      this.hadouX,
      this.hadouY * this.yFrameAdjuster
    );

    this.animateImgMoving(framesCounter);
  }

  animateImgMoving(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 30 === 0) {
      this.imgHadou.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadou.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  drawImpact(framesCounter) {
    this.ctx.drawImage(
      this.imgHadouImpact,
      this.imgHadouImpact.frameIndex * Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      0,
      Math.floor(this.hadouImpactX / this.imgHadouImpact.frames),
      this.hadouImpactY,
      this.startPointX,
      this.startPointY,
      this.hadouImpactX,
      this.hadouImpactY * this.yFrameAdjuster
    );

    this.animateImgImpact(framesCounter);
  }

  animateImgImpact(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 30 === 0) {
      this.imgHadouImpact.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.imgHadouImpact.frameIndex > 1) this.imgHadou.frameIndex = 0;
    }
  }

  reset() {
    this.startPointX = this.startPointPlayer;
  }
}
