function Enemy(x, y, tipo) {
  this.jumpE = false
  this.inAirE = false
  var timer
  this.tipo = tipo || 0
  switch (this.tipo) {
    case 0:
      this.image = new Image()
      this.image.src = assets.tipo0
      this.health = 45
      this.attack = Math.floor(Math.random() * 5) + 9
      this.speed = 3
      break;
    case 1:
      this.image = new Image()
      this.image.src = assets.tipo1
      this.health = 150
      this.attack = Math.floor(Math.random() * 8) + 15
      this.speed = 2.5
      break;

    case 2:
      this.image = new Image()
      this.image.src = assets.tipo2
      this.health = 300
      this.attack = Math.floor(Math.random() * 4) + 18
      this.speed = 1.7
      break;
    case 3:
      this.image = new Image()
      this.image.src = assets.tipo3
      this.health = 500
      this.attack = Math.floor(Math.random() * 10) + 25
      this.speed = 1.1
      break;
    default:
      this.image = new Image()
      this.image.src = assets.tipo0
      this.health = 45
      this.attack = Math.floor(Math.random() * 5) + 9
      this.speed = 2
  }

  this.x = x || 65
  this.y = y || 65
  this.width = 32
  this.height = 32
  // this.image.onload = function () {
  //   this.draw()
  // }.bind(this)

  this.draw = function () {
    this.canvasBounds()
    this.platformBounds()
    this.y += 5
    this.enemyAI()

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
  this.canvasBounds = () => {
    if (this.y + this.height >= c.height - 64) {
      this.y = c.height - this.height - 64
      this.jumpE = false
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
        this.y > platforms[plat][1] - 32 && this.y < platforms[plat][1] - 16)
        this.y = platforms[plat][1] - 32
        if (this.y === platforms[plat][1] - 32){
          this.jumpE=false
        }
    }
  }
  this.enemyAI = function () {
    //follow Left
    if (char1.x > this.x) this.x += this.speed
    //follow Right
    if (char1.x < this.x) this.x += this.speed * -1
    //Stand Up when in same Level
    if (char1.y <= this.y && char1.y + 32 >= this.y + 32 && this.inAirE === false && this.jumpE === false) {
      this.y -= 3;
    }
    //Jump to upper platform
    if (char1.y + char1.height+32 < this.y && this.inAirE === false && this.jumpE === false) {
      ghostJump.play()
      timer = setTimeout(() => {
        this.y -= 12
        this.jumpE=true
      },250)
      this.y += 5
    }
  }
}