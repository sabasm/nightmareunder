var LEFT = false;
var RIGHT = false;
var JUMP = false
var inAir=false
var readyToJump = true

function controles() {

    if (LEFT) {
        char1.x -= 7;
    }
    if (RIGHT) {
        char1.x += 7;
    }
    if (JUMP) {
        char1.y -= 20;
    }

}

addEventListener('keydown', function (e) {
    if (e.keyCode === 65)
        LEFT = true
    if (e.keyCode === 68)
        RIGHT = true
    if (e.keyCode === 87 && inAir===false && JUMP===false && readyToJump===true){
        
        soulJump.play()
        JUMP = true
        inAir=true
        setTimeout(stopJump,50)
           }
    })
     function stopJump(){
        
        
       JUMP=false
        avoidJump()
    }
    function avoidJump(){
        setTimeout(readyToJump=true,1000)
    }
addEventListener('keyup', function (e) {
    if (e.keyCode === 65)
        LEFT = false
    if (e.keyCode === 68)
        RIGHT = false
    if (e.keyCode === 87){}
})