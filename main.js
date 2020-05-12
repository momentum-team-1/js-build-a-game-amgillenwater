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
        //add enemies--why do we pass through this class?
        this.bodies = this.bodies.concat(createEnemies(this))
        this.bodies = this.bodies.concat(new Player(this, gameSize))
        let tick = () => {
            // Update game state.
              this.update()
        
              // Draw game bodies.
              this.draw(screen, gameSize)
        
              // Queue up the next call to tick with the browser.
              requestAnimationFrame(tick)
            }
            tick()

    }
}

function update () {
    // `notCollidingWithAnything` returns true if passed body
    // is not colliding with anything.
    let notCollidingWithAnything = (b1) => {
      return this.bodies.filter(function (b2) { return colliding(b1, b2) }).length === 0
    }

    // Throw away bodies that are colliding with something. They
    // will never be updated or draw again.
    this.bodies = this.bodies.filter(notCollidingWithAnything)

    // Call update on every body.
    for (let i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update()
    }
}

// PLAYER CLASS
//     RESPONSIBILITIES
//         MOVE USING THE ARROW KEYS (UP,DOWN,LEFT,RIGHT)
//     COLLABORATORS
//         ENEMY CLASS
//         COIN CLASS
class Player{
    constructor(){

    }
    //BEHAVIORS: MOVE USING THE ARROW KEYS + COLLIDE WITH COIN TO "TAKE"
        
    }
// COIN CLASS
//     RESPONSIBILITIES
//         MOVE TO A NEW SPOT WHEN THE PLAYER TOUCHES THE COIN
//         TRIGGER THE SCORE WHEN TOUCHED
//     COLLABORATORS
//         PLAYER SQUARE
//         SCORE

// class Coin{
//     constructor(){
//         this.taken = false; //this value will start as false because the coin has not been "taken" by the player yet
//     }
// }
// START ON A RANDOM SPOT ON BOARD
// TRIGGER POINT WHEN COLLIDE WITH PLAYER
// ADD POINT TO SCORE
// RESET IN A NEW, RANDOM SPOT 


// ENEMIES CLASS
//     RESPONSIBILITIES
//         MOVE FROM L TO R, R TO L, TOP TO BOTTOM, OR BOTTOM TO TOP IN 3 DISTINCT PATHS IN EACH DIRECTION -- BEHAVIORS
//         AFTER COLLISION WITH PLAYER, RESET BOARD AND SCORE TO ZERO
//         WILL BE MULTIPLE ONES MOVING AT A TIME--ADD IDS?
//     COLLABORATORS
//         PLAYERS
        
        
// class Enemies{
//     constructor(){
//         this.id = `enemy-${index}`
//     }
// }


function createEnemies(num) {
    const enemies = [];
    //empty array, the loop will iterate num times when called to create the array for enemies

    for (let i=0; i < num; i++) {
        let enemy = new Enemy(i, this);
        enemies.push(enemy);
    }   
    
    return enemies;
}


