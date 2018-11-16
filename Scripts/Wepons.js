//type = 0 pistol 1 shotgun 2 automatic rifle 3 submachine gun
function wepon(x, y, tipo) {
    this.x = x || 0
    this.y = y || 0
    this.width = 16
    this.height=16
    this.image = new Image()
    this.image2= new Image()
    this.kind = tipo || Math.round(Math.random() * 3)
    switch (this.kind) {
        case 0:
            this.wepon = 0
            this.bullets = 18
            this.firerate = 1
            this.damage = 15
            this.reloadTime = 1
            this.image.src = assets.pistol
            break;
        case 1:
            this.wepon = 1
            this.bullets = 8
            this.firerate = 3
            this.damage = 30
            this.reloadTime = 3
            this.image.src = assets.shotgun
            break;
        case 2:
            this.wepon = 2
            this.bullets = 24
            this.firerate = 1
            this.damage = 30
            this.reloadTime = 1.8
            this.image.src = assets.automaticRifle
            break;
        case 3:
            this.wepon = 3
            this.bullets = 40
            this.firerate = .4
            this.damage = 15
            this.reloadTime = 2
            this.image.src = assets.sMG
            break;
        default:
            this.wepon = 0
            this.bullets = 18
            this.firerate = 1
            this.damage = 15
            this.reloadTime = 1
            this.image.src = assets.pistol
    }

    //rare= 0 10% legendary, 1 18% rare, 2 27% uncommon, 3 45% common
    var random = Math.random()
    console.log(random)
    if (random <= 0.10) {
        this.rare = 2
        this.image2.src=assets.epic
    } else if (random > 0.10 && random <= 0.28) {
        this.rare = 1.8
        this.image2.src=assets.rare
    } else if (random > 0.28 && random <= 0.55) {
        this.rare = 1.3
        this.image2.src=assets.uncommon
    } else {
        this.rare = 1
        this.image2.src=assets.common
    }
    
    this.hitPoint = Math.round(this.rare * this.damage)

    this.image.onload = function () {
        this.draw()
    }.bind(this)
    
    this.draw = function () {
        this.y+=2.4
        this.canvasBounds()
        this.platformBounds()
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.image2, this.x, this.y, this.width, this.height)
        
    }
    this.canvasBounds=()=>{
        if (this.y+this.height>=c.height-64){
          this.y=c.height-this.height-64
        }else{
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