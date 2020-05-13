const canvas = document.querySelector("#the-box");
const context = canvas.getContext("2d");
const gameSize = { x: canvas.width, y: canvas.height };
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
// console.log(context);

class Game {
  constructor() {
    this.player = new Player(gameSize);
    this.coin = new Coin(gameSize);
    this.drawCoin(context,gameSize)
    let animate = () => {
      this.update();
      this.drawPlayer(context, gameSize);
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

  drawCoin(context, gameSize) {
    // context.clearRect(0, 0, gameSize.x, gameSize.y);
    context.fillStyle = "#cc7f04";
    let startingX = Math.floor(Math.random() * canvas.width)
    let startingY = Math.floor(Math.random() * canvas.height)
    let coinWidth = this.coin.size.x;
    let coinHeight = this.coin.size.y;
    context.fillRect(startingX, startingY, coinWidth, coinHeight);
  }

  update() {
    this.player.update();
    this.drawCoin
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

  }

class Coin {
   constructor(gameSize, center) {
       this.center = center
       this.size = {x: 20, y: 20}
       this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 };
    }

    update(){
        if ("coin is taken"){
           drawCoin(context,gameSize) 
        }
    }
    
}


new Game();


