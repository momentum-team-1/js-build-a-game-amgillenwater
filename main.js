class Game {
  constructor() {
    let canvas = document.querySelector("#the-box");
    let context = canvas.getContext("2d");
    console.log(context);

    let gameSize = { x: canvas.width, y: canvas.height };
    this.player = new Player(gameSize);
    this.coin = new Coin(gameSize)

    let animate = () => {
      this.update();
      this.drawPlayer(context, gameSize);
      this.drawCoin(context, gameSize)
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
    let startingX = this.coin.center.x - this.coin.size.x / 2;
    let startingY = this.coin.center.y - this.coin.size.y - 2;
    let playerWidth = this.coin.size.x;
    let playerHeight = this.coin.size.y;
    context.fillRect(startingX, startingY, playerWidth, playerHeight);
  }

  update() {
    this.player.update();
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
    //    this.game = game
       this.center = center
       this.size = {x: 20, y: 20}
       this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 };
        }
    
}


new Game();


