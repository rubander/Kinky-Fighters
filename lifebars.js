class LifeBar {
    maxWidth = 300
    totalLifePoints = 100

    constructor(ctx, x, y, currentLifePoints) {
        this.ctx = ctx
        this.x = x
        this.y = y 
        this.currentLifePoints = currentLifePoints

    }

    draw (reducedLifePoints) {
        this.ctx.fillStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.maxWidth, 30)
        this.ctx.fill();
        this.ctx.closePath();
        this.reduceLife(reducedLifePoints)
    }

    reduceLife(reducedLifePoints) {
        this.ctx.fillStyle = "red"
        this.currentLifePoints -= reducedLifePoints
        
        let newLength = this.maxWidth * (this.currentLifePoints) / this.totalLifePoints

        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, newLength, 30)
        this.ctx.fill();
        this.ctx.closePath();
    }
}