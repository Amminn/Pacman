const width = 28
const grid = document.querySelector('.grid')
let scoreDisplay = document.getElementById('score')
let haha = document.getElementById('haha')
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
let pacmanCurrentIndex = 391
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
    console.log(pacmanCurrentIndex)
    pacDotEaten()
    squares[pacmanCurrentIndex].classList.add('pacman')
}


function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        console.log(score)
        scoreDisplay.innerHTML = score
    }
}
document.addEventListener('keyup', control)


class Ghost {
    constructor(className,startIndex, speed){
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
    new Ghost('pinky', 376, 100),
    new Ghost('inky', 351, 100),
    new Ghost('clyde', 379, 100)
]


//draw my ghosts onto my grid
ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className)
    squares[ghost.startIndex].classList.add('ghost')
})

//move the ghosts
ghosts.forEach(ghost => moveGhost(ghost)) 

function moveGhost(ghost) {
    console.log('moved ghost')
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)
    
    ghost.timerId = setInterval(function() {
        //all our code
        //if the next square does NOT contain a wall and does not contain a ghost
        if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ) {
            //remove any ghost
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost')
            // //add direction to current Index
            ghost.currentIndex += direction
            // //add ghost class
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } else 
            direction = directions[Math.floor(Math.random() * directions.length)]
        
    }, ghost.speed )
    
}