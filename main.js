//GAME CLASS
    //RESPONSIBILITIES
        //COLLISION DETECTION
        //TRACK SCORE
        //ENDING THE GAME/RESETTING THE SCORE
        //START THE GAME
    //COLLABORATORS
        //PLAYER
        //COIN
        //ENEMIES

class Game {
    constructor (){
        let canvas = document.querySelector('#the-box');
        let context = canvas.getContext('2d');
        // console.log(context)
        context.fillStyle = '#4D5359';
        context.fillRect(50, 50, 400, 400);
        let gameSize = { x: canvas.width, y: canvas.height }
        this.player = new Player(gameSize)
        let animate = () => {
            this.update()
            this.drawPlayer(context, gameSize)
            requestAnimationFrame(animate)
        }
        animate()
    }
        drawPlayer (context, gameSize) {
            console.log("draw player method called")
            context.fillStyle= '#79C99E'
            let startingX = this.player.center.x - this.player.size.x / 2
            let startingY = this.player.center.y - this.player.size.y / 2
            let playerWidth = this.player.size.x
            let playerHeight = this.player.size.y
            context.fillRect(startingX, startingY, playerWidth, playerHeight)
            context.clearRect (0, 0, gameSize.x, gameSize.y) ;
        }

        update (){
            this.player.update();
        }
    }


class Player{
    constructor (gameSize){
        this.size = { x: 30, y: 30 };
        this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2};
        this.keyboarder = Keyboarder
    }
    update() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            console.log("RIGHT ARROW WAS PRESSED")
            this.center.x += 2
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)){
            console.log("LEFT ARROW WAS PRESSED")
            this.center.x -= 2
        }

}

new Game()