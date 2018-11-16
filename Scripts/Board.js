function Board() {
    this.xi = 0
    this.yi = 0
    this.xh = 0
    this.yh = 0
    this.width = 64
    this.height = 64
    this.side = new Image()
    this.side.src = assets.side
    this.corner = new Image()
    this.corner.src = assets.corner
    this.platform1 = new Image()
    this.platform1.src = assets.platform1
    this.platform2 = new Image()
    this.platform2.src = assets.platform2
    this.platform3 = new Image()
    this.platform3.src = assets.platform3

    this.side.onload = () => {
        this.draw()
    }
    //MASTER DRAW LEVEL
    this.draw = function () {
        //FOR CORNERS
        ctx.drawImage(this.corner, 0, 0, this.width, this.height)
        ctx.drawImage(this.corner, 1152 - 64, 0, this.width, this.height)
        ctx.drawImage(this.corner, 0, 768 - 64, this.width, this.height)
        ctx.drawImage(this.corner, 1152 - 64, 768 - 64, this.width, this.height)

        //FOR WALLS
        for (var i = 64; i < 700; i++) {
            if (i % 64 === 0) {
                this.yi = i
                ctx.drawImage(this.side, this.xi, this.yi, this.width, this.height)
                ctx.drawImage(this.side, 1152 - 64, this.yi, this.width, this.height)
            }
        }
        //FOR CEILING AND FLOOR
        for (var h = 64; h < 1080; h++) {
            if (h % 64 === 0) {
                this.xh = h
                ctx.drawImage(this.side, this.xh, this.yh, this.width, this.height)
                ctx.drawImage(this.side, this.xh, 768 - 64, this.width, this.height)
            }
        }
        //FOR PLATFORMS
        this.drawPlatforms()
    }

    this.drawPlatforms = function (x, y, width) {
        
        var middle = width - 1
        for (var i = 0; i <= width; i++) {
            if (i === 0) {
                ctx.drawImage(this.platform1, x, y, 32, 16)
                x+=32
            } else if (i > 0 && i <= middle && middle > 0) {
                ctx.drawImage(this.platform2, x, y, 32, 16)
                x+=32
            } else {
                ctx.drawImage(this.platform3, x, y, 32, 16)
            }

        }
    }
    
}