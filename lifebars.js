class LifeBar {
    maxWidth = 300
    totalLifePoints = 100

    constructor(ctx, x, y, color, numberL) {
        this.ctx = ctx
        this.x = x
        this.y = y 
        this.color = color
        this.currentLifePoints = 100

    }

    draw () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.maxWidth * (this.currentLifePoints) / this.totalLifePoints, 30)
        this.ctx.fill();
        this.ctx.closePath();
    }

    reduceLife(reducedLifePoints) {
        this.currentLifePoints -= reducedLifePoints
        
        let newLength = this.maxWidth * (this.currentLifePoints) / this.totalLifePoints

        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, newLength, 30)
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class LifeBarRed {
    maxWidth = 300
    totalLifePoints = 100

    constructor(ctx, x, y, color, numberL) {
        this.ctx = ctx
        this.x = x
        this.y = y 
        this.color = color
        this.currentLifePoints = 100

    }

    draw () {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.maxWidth, 30)
        this.ctx.fill();
        this.ctx.closePath();
    }

}

class YouWin {

    constructor(ctx){
        this.ctx = ctx
        this.winImg = new Image();
        this.winImg.src = "./img/you_win.png"
    }

    draw () {this.ctx.drawImage(
        this.winImg,
        0,
        0,
        600,
        286,
        300,
        180,
        600,
        286,
      )}
}