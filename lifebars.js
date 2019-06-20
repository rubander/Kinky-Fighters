class LifeBar {
    maxWidth = 300
    totalLifePoints = 100

    constructor(ctx, x, y, color, currentLifePoints) {
        this.ctx = ctx
        this.x = x
        this.y = y 
        this.color = color
        this.currentLifePoints = currentLifePoints

    }

    draw (reducedLifePoints) {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.maxWidth, 30)
        this.ctx.fill();
        this.ctx.closePath();
        this.reduceLife(reducedLifePoints)
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