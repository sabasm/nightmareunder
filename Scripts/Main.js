//canvas
var c = document.getElementById("c");
var ctx = c.getContext("2d");
window.onload = function() {
  ctx.drawImage(cover,0,0,c.width,c.height)
};

//variables
var turn = 1;
var interval = 0;
var frames = 0;
var assets = {
  //level builders
  side:
    "http://xmoto.tuxfamily.org/sprites/Textures/Textures/DarkDirt.jpg",
  platform1:
    "http://nfgworld.com/grafx/games/grassy/Grassy-WBML32.png",
    platform2:
    "http://nfgworld.com/grafx/games/grassy/Grassy-WBML32.png",
    platform3:
    "http://nfgworld.com/grafx/games/grassy/Grassy-WBML32.png",
    corner:
    "http://xmoto.tuxfamily.org/sprites/Textures/Textures/DarkDirt.jpg",

  //Characters
  char1:
    "https://vignette.wikia.nocookie.net/darksouls/images/6/64/Soul_of_a_Crystal_Sage.png/revision/latest?cb=20160615102453",
  char2:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0011_char1.png?alt=media&token=4053b45a-700f-4de2-b156-37b965695ed5",

  //enemies
  tipo0:
    "https://cdn3.iconfinder.com/data/icons/halloween-29/64/ghost-512.png",
    tipo1:
    "https://cdn3.iconfinder.com/data/icons/halloween-29/64/ghost-512.png",
    tipo2:
    "https://cdn3.iconfinder.com/data/icons/halloween-29/64/ghost-512.png",
    tipo3:
    "https://cdn3.iconfinder.com/data/icons/halloween-29/64/ghost-512.png",
  //resources
  ammo:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0000_bullets.png?alt=media&token=7ed6417d-f9f6-46b7-be01-5e955f336de4",
  meds:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0001_meds.png?alt=media&token=82ae1edb-d89d-4b4a-a43e-fac256fd84cb",

  //types of guns
  pistol: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
  shotgun: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
  automaticRifle: "https://cdn.onlinewebfonts.com/svg/img_376373.png",
  sMG: "https://cdn.onlinewebfonts.com/svg/img_376373.png",

  //audio y sfx
  musique:"https://freesound.org/data/previews/435/435499_8874608-lq.mp3",
  ghostSfx:"https://freesound.org/data/previews/67/67091_931386-lq.mp3",
  soulSfx:"https://freesound.org/data/previews/260/260614_4486188-lq.mp3",
  gameOverLaught:"https://freesound.org/data/previews/132/132746_875457-lq.mp3",

  //cover
  cover:"https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/cover.png?alt=media&token=bb4f46ca-97f1-4e9b-a9cb-d50e5965a77a",

  //rare
  common:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0009_gun0.png?alt=media&token=2daca942-b43b-4712-bfe3-46a1b7e360d3",
  uncommon:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0007_gun2.png?alt=media&token=9c4fd084-bc41-4111-9e00-250e9f33d62f",
  rare:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0008_gun1.png?alt=media&token=524eb796-0491-4acb-ac3c-6a7d233ff461",
  epic:
    "https://firebasestorage.googleapis.com/v0/b/nightmare-underworld.appspot.com/o/Nightmare-Underworld-test-assets_0006_gun3.png?alt=media&token=bf42ed93-1dcc-4a9f-b43e-accefa423a2d"
};
var platforms = [
  //Center
  [c.width / 2 - 2.5 * 32, c.height - 160 - 25, 5, c.width / 2 + 2.5 * 32],
  [c.width / 2 - 4 * 32, c.height - 260 - 30, 8, c.width / 2 + 4 * 32],
  [c.width / 2 - 5 * 32, c.height - 360 - 30, 10, c.width / 2 + 5 * 32],
  [c.width / 2 - 6 * 32, c.height - 460 - 30, 12, c.width / 2 + 6 * 32],
  [c.width / 3 - 2 * 32, c.height - 560 - 30, 4, c.width / 3 + 2 * 32],
  [c.width / 3 + 10 * 32, c.height - 560 - 30, 4, c.width / 3 + 14 * 32],

  //left
  [64, c.height - 145, 10, 64 + 10 * 32],
  [64, c.height - 245 - 17, 8, 8 + 10 * 32],
  [64, c.height - 345 - 17, 5, 64 + 5 * 32],
  [64, c.height - 445 - 17, 4, 64 + 4 * 32],
  [64, c.height - 545 - 17, 3, 64 + 3 * 32],
  [64, c.height - 645 - 17, 2, 64 + 2 * 32],

  //right
  [c.width - 10 * 32 - 64, c.height - 145, 9, c.width - 64 - 32],
  [c.width - 64 - 8 * 32, c.height - 245, 7, c.width - 64 - 32],
  [c.width - 64 - 5 * 32, c.height - 345, 4, c.width - 64 - 32],
  [c.width - 64 - 4 * 32, c.height - 445, 3, c.width - 64 - 32],
  [c.width - 64 - 3 * 32, c.height - 545, 2, c.width - 64 - 32],
  [c.width - 64 - 2 * 32, c.height - 645, 1, c.width - 64 - 32]
];
var liveEnemies = [];
//instances
var gameOverSfx = new Audio(assets.gameOverLaught)
var audio = new Audio(assets.musique);
var ghostJump=new Audio(assets.ghostSfx)
var soulJump= new Audio (assets.SoulSfx)
var char1 = new Character(assets.char1, c.width / 2 - 16, 128);
var level = new Board();
var enemy0 = new Enemy(c.width/5, c.height-128, 0);
var enemy1 = new Enemy(2*c.width/5, 256, 1);
var enemy2 = new Enemy(3*c.width/5, 256, 2);
var enemy3 = new Enemy(4*c.width/5, 256, 3);
var scores = new ScoreBoard();
var cover = new Image ()
cover.src=assets.cover

//main functions
function hide() {
  var x = document.getElementById("cover");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  var y = document.getElementById("c");
  if (y.style.display === "none") {
      y.style.display = "flex";
      y.style.alignSelf="center";
  }

  setTimeout(start,2000)
}


function start() {
  // if(turn === 1 ){
  //   player1 = 0
  //   player2 = 0
  // }
  audio.play()
  char1.x = c.width/2-16;
  char1.y = 256;
  enemy0.x = 1*c.width/5;
  enemy0.y = c.height - 128
  enemy1.x = 2*c.width/5;
  enemy1.y = c.height - 128
  enemy2.x = 3*c.width/5;
  enemy2.y = c.height - 128
  enemy3.x = 4*c.width/5;
  enemy3.y = c.height - 128
  interval = 0;
  frames = 0;
  score = 0;
  interval = setInterval(update, 1000 / 60);
}

function update() {
  frames++;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, c.width, c.height);
  level.draw();
  platformsGenerator();
  char1.draw();
  enemy1.draw();
  enemy2.draw();
  enemy3.draw();
  enemy0.draw();
  liveEnemies = [
    [enemy0.x, enemy0.y],
    [enemy1.x, enemy1.y],
    [enemy2.x, enemy2.y],
    [enemy3.x, enemy3.y]
  ];
  // ammo.draw()
  // meds.draw()
  // gun.draw()
  controles();

  scores.drawScore();

  if(audio.currentTime===audio.duration)audio.play()
}
function gameOver() {
  gameOverSfx.play()
  clearInterval(interval);
  if (turn === 1) {
    player1 = score;
    
    console.log("p"+player1)
    setTimeout(function() {
      start();
      turn++;
    }, 5000);
  }
  if (turn === 2) {
    player2 = score;
    console.log("2"+player2)
    turn++;
    setTimeout(function() {

      }, 2000);
  }

}

//AUXILIAR FUNCTIONS
function platformsGenerator() {
  for (var plat = 0; plat < platforms.length; plat++) {
    level.drawPlatforms(
      platforms[plat][0],
      platforms[plat][1],
      platforms[plat][2]
    );
  }
}
