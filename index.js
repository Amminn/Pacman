const width = 28
const grid = document.querySelector('.grid')
let scoreDisplay = document.getElementById('score')
let haha = document.getElementById('haha')
let loseScore = document.getElementById('game-score')
let winScore = document.getElementById('win-score')
let squares = []
var score = 0

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

//create board
function createBoard() {
    //for loop 
    for (let i = 0; i < layout.length; i++) {
        //create a square 
        const square = document.createElement('div')
        //put square in grid 
        grid.appendChild(square)
        //put square in squares array
        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
}
createBoard()

// down - 40
// up key - 38
// left - 37
// right - 39
// 476 419
//starting position of pacman 

// width containe 28 div 
// height containe 28 div 
// full containes 784
// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

// to move left 490 - 1  490 % 28 !== 0  if it 0 it means we hit the wall m
// to mive right 490 + 1  490 % 28 < 28 - 1 it has to be less than 27 or we will hit the wall
// move down 490 + 28 as long as 490 + 24 < 24 * 24 which means 363
let pacmanCurrentIndex = 492
squares[pacmanCurrentIndex].classList.add('pacman')

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')

    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (!(squares[pacmanCurrentIndex + width].classList.contains('wall')) && !(squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')) &&(pacmanCurrentIndex + width) < width * width) pacmanCurrentIndex += width
        break

        case 38:
        console.log('pressed up')
        if (!(squares[pacmanCurrentIndex - width].classList.contains('wall')) && !(squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')) &&(pacmanCurrentIndex - width) > 0) pacmanCurrentIndex -= width
        break

        case 37:
        console.log('pressed left')
        if (!(squares[pacmanCurrentIndex - 1].classList.contains('wall')) && !(squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')) &&((pacmanCurrentIndex - 1) % width) < width - 1)
        pacmanCurrentIndex -= 1
        if (pacmanCurrentIndex === 364) {
            pacmanCurrentIndex = 391
        }
        break

        case 39:
        console.log('pressed right')
        if (!(squares[pacmanCurrentIndex + 1].classList.contains('wall')) && !(squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')) &&(pacmanCurrentIndex + 1) % width !== 0) 
        pacmanCurrentIndex += 1
        if (pacmanCurrentIndex === 391) {
            pacmanCurrentIndex = 364
        }
        break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()
    powerPelletEaten()
    checkForWin()
    checkForGameOver()
}

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        // console.log(score)
        scoreDisplay.innerHTML = score
    }
}

function powerPelletEaten() {
    //if square pacman is in contains a power pellet
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        score = score + 10
        // for (ghosts.forEach(ghost => ))
        console.log('they are scared')
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(notScared, 8000);
    }
    //add a score of 10
    
    //change each of the four ghosts to isScared
}

function notScared() {
    ghosts.forEach(ghost => ghost.isScared = false)
}

document.addEventListener('keyup', control)

class Ghost {
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

ghosts = [
    new Ghost('blinky', 348, 100),
    new Ghost('blinky', 348, 100),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 500),
    new Ghost('clyde', 379, 300)
]

//draw my ghosts onto my grid
ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className)
    squares[ghost.startIndex].classList.add('ghost')
})

//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost)) 

function moveGhost(ghost) {
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    
    ghost.timerId = setInterval(function() {
        //all our code
        //if the next square does NOT contain a wall and does not contain a ghost
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            //remove any ghost
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'ghost-scarred')
            // //add direction to current Index
            ghost.currentIndex += direction
            // //add ghost class
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } else 
            direction = directions[Math.floor(Math.random() * directions.length)]  
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add('ghost-scarred')
        }

        if (ghost.isScared === true && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'ghost-scarred')
            ghost.currentIndex = ghost.startIndex
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            score = score + 100
        }

        //if the ghost is current scared AND pacman is on it
        
        //remove classnames - ghost.className, 'ghost', 'scared-ghost'
        
        // change ghosts currentIndex back to its startIndex
        
        //add a score of 100
        
        //re-add classnames of ghost.className and 'ghost' to the ghosts new postion
        checkForGameOver()
    }, ghost.speed )
}

function checkForGameOver() {
    //if the square pacman is in contains a ghost AND the square does NOT contain a scared ghost 
    if (squares[pacmanCurrentIndex].classList.contains('ghost') && 
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            // console.log('dead')
            ghosts.forEach(ghost => clearInterval(ghost.timerId)) 
            document.removeEventListener('keyup', control);
            document.body.classList.add("bad");
            loseScore.innerHTML = score
    }
}

function checkForWin() {
    if (score === 400) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId)) 
        document.removeEventListener('keyup', control);
        document.body.classList.add("good");
        winScore.innerHTML = score
    }
}
    //for each ghost - we need to stop it moving
    
    //remove eventlistener from our control function
    
    //tell user the game is over

// after i eat the power pallet the ghosts are getting scared now 
// when the ghosts are not scared they should have the ability to eat me
// after i get the power pallet beside they should get scarred im suppose to be able to eat them
// when i do eat them the they have to respond the thier base
// every 20s the ghosts get faster 20%


