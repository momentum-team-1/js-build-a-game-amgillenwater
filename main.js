//GAME CLASS
    //RESPONSIBILITIES
        //COLLISION DETECTION
        //TRACK SCORE
        //ENDING THE GAME/RESETTING THE SCORE
        //START THE GAME
    //COLLABORATORS
        //PLAYER
        let canvas = document.getElementById('the-box');
        let screen = canvas.getContext('2d');
        // console.log(screen)
        screen.fillStyle = '#D5CAD6';
        screen.fillRect(50, 50, 400, 400);

class Game{
    constructor (){
        let gameSize = { x: canvas.width, y: canvas.height }
        //create the array to hold all of the pieces
        this.bodies = []
        //add enemies--why do we pass this through this function?
        this.bodies = this.bodies.concat(createEnemy(this))
    }
}
//PLAYER CLASS
    //RESPONSIBILITIES
        //MOVE USING THE ARROW KEYS (UP,DOWN,LEFT,RIGHT)
    //COLLABORATORS
        //TARGET CLASS
    //MOVE FROM L TO R, R TO L, TOP TO BOTTOM, OR BOTTOM TO TOP IN 3 DISTINCT PATHS IN EACH DIRECTION -- BEHAVIORS
class Player{
    //BEHAVIORS: MOVE USING THE ARROW KEYS + COLLIDE WITH COIN TO "TAKE"
        
    }
//COIN CLASS
    //RESPONSIBILITIES
        //MOVE TO A NEW SPOT WHEN THE PLAYER TOUCHES THE COIN
        //TRIGGER THE SCORE WHEN TOUCHED
    //COLLABORATORS
        //PLAYER SQUARE
        //SCORE

class Coin{
//START ON A RANDOM SPOT ON BOARD
//TRIGGER POINT WHEN COLLIDE WITH PLAYER
//ADD POINT TO SCORE
//RESET IN A NEW, RANDOM SPOT 

}