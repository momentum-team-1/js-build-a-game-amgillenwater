const canvas = document.querySelector("#the-box");
const context = canvas.getContext("2d");
const gameSize = { x: canvas.width, y: canvas.height };

class Game {
  constructor() {
    this.player = new Player(gameSize);
    this.coin = new Coin(gameSize);
    let animate = () => {
      this.drawPlayer(context, gameSize);
      this.drawCoin(context)
      this.update();
      requestAnimationFrame(animate);
    };
    animate();
  }

  drawPlayer(context, gameSize) {
    context.clearRect(0, 0, gameSize.x, gameSize.y);
    context.fillStyle = "#79C99E";
    let startingX = this.player.center.x - this.player.size.x / 2;
    let startingY = this.player.center.y - this.player.size.y / 2;
    let playerWidth = this.player.size.x;
    let playerHeight = this.player.size.y;
    context.fillRect(startingX, startingY, playerWidth, playerHeight);
  }

  drawCoin(context) {
    // context.clearRect(0, 0, gameSize.x, gameSize.y);
    context.fillStyle = "#cc7f04";
    let startingX = this.coin.center.x - this.coin.size.x / 2;
    let startingY = this.coin.center.y - this.coin.size.y / 2;
    let coinWidth = this.coin.size.x;
    let coinHeight = this.coin.size.y;
    context.fillRect(startingX, startingY, coinWidth, coinHeight);
  }

  update() {
    this.player.update();
    this.player.bounds();
  }
}

class Player {
  constructor(gameSize) {
    this.size = { x: 30, y: 30 };
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 };
    this.keyboarder = Keyboarder;
  }

  update() {
    if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
      this.center.x += 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
      this.center.x -= 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
      this.center.y -= 2;
    } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {
      this.center.y += 2;
    }
  }

  bounds() {
    if (this.center.x < 175) {
      this.center.x = 175
    } else if (this.center.x > 275){
      this.center.x = 275
    } else if (this.center.y < 175){
      this.center.y = 175
    } else if (this.center.y > 275){
      this.center.y = 275
    }
  }
    
  
  

  }

class Coin {
   constructor(gameSize, center) {
       this.center = center
       this.size = {x: 20, y: 20}
       this.center = { x: randomNum(175,275), y: randomNum(175,275) };
    

    
    }


    
}

function randomNum (min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min
}
randomNum(175,275)

new Game();


