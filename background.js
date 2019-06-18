class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./img/bg/kenbg.png";

    this.imgred = new Image();
    this.imgred.src = "./img/bg/kenbg1200.png"

    this.x = 0;
    this.y = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, 340, 368, 1000, 308, 0, 0, 1000, 310);
    // this.ctx.drawImage(this.imgred, 10, 34, 691, 229, 0, 0, 691, 229);
    this.ctx.drawImage(this.img, 111, 43, 815, 317, 0, 0, 815, 317);
    this.ctx.drawImage(this.img, 340, 688, 1000, 127, 0, 307, 1000, 133);

  }
}

// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);