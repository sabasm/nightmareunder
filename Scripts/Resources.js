//kind 0 meds 1 ammo
function Resources(x,y,tipo){
    this.image = new Image()
    this.kind=tipo || Math.round(Math.random())
    if(this.kind===0){
        this.image.src = assets.meds
    }else{
        this.image.src = assets.ammo
    }
    this.x = x || 0
    this.y = y || 0
    this.width = 16
    this.height = 16
    if (this.kind===0){
        this.quantity =   3
        this.recover= 15
        this.delay=1
    }else{
        this.quantity = 1
        this.recover =   Math.round(Math.random() * (20 - 8) + 8)
        this.delay=0
    }

    this.image.onload = function(){
      this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y+=2.4
        this.canvasBounds()
        this.platformBounds()
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      
    }
    this.canvasBounds = () => {
        if (this.y + this.height >= c.height - 64) {
          this.y = c.height - this.height - 64
          inAir = false
        }
        if (this.y >= c.height - 64) {
          this.y = c.height - 64
        }
        if (this.y <= 64) {
          this.y = 64
        }
        if (this.x <= 64) {
          this.x = 64
        }
        if (this.x >= c.width - 64 - 32) {
          this.x = c.width - 64 - 32
        }
    
      }
    
      this.platformBounds = () => {
        //X>=platforms 0 0 -32 x< = platforms (0 2 -1)*64 y> platforms 0 1 -32 y< platforms 0 1 - 16
        for (var plat = 0; plat < platforms.length; plat++) {
          if (this.x > platforms[plat][0] - 32 && this.x < platforms[plat][3] + 32 &&
            this.y > platforms[plat][1] - 16 && this.y < platforms[plat][1] - 10)
            this.y = platforms[plat][1] - 16
        }
      }
  }