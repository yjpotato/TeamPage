let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d'); // context 란 뜻으로 ctx

canvas.width = window.innerWidth - 500;
canvas.height = window.innerHeight - 500;

let dinoImg = new Image();
dinoImg.src = '/html/seokjun/html5up-astral/images/ugoback.gif';
let dino = {
    x: 10,
    y: 100,
    width: 40,
    height: 50,
    draw() {
        ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }
}

let enemyImg = new Image();
enemyImg.src = '/html/seokjun/html5up-astral/images/test.png';

class Cactus {
    constructor() {
        this.width = 20 + getRandomInt(-3, 4);
        this.height = 30 + getRandomInt(-3, 4);
        this.x = 500;
        this.y = 250 - this.height;
    }
    draw() {
        ctx.drawImage(enemyImg, this.x, this.y, this.width, this.height);
    }
}

let timer = 0;
let cactusArr = [];
let gameState = 0; // 0: end, 1: start
let jumpState = 0; // 0: default, 1: jumping
let jumpTimer = 0;
let animation;
let life = 5;
let score = 0;

function frameAction() {
    animation = requestAnimationFrame(frameAction);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timer += 1;

    if(timer % 120 == 0){
        let cactus = new Cactus();
        cactusArr.push(cactus);
    }
    cactusArr.forEach((a, i, o)=>{
        if(a.x < 0){
            o.splice(i, 1);
            score += 10;
            document.querySelector('#score').innerHTML = `Score: ${score}`;
        } else if(collisionDetection(dino, a) < 0){
            o.splice(i, 1);
        }

        a.x -= 2;
        a.draw();
    })    

    if(jumpState == 1){
        jumpTimer++; 
        dino.y -= 2;
    }
    if(jumpTimer > 50){
        jumpState = 0;
        jumpTimer = 0;
    }
    if(jumpState == 0 ){
        if(dino.y < 200){
            dino.y += 2;
        }
    }

    drawLine();
    dino.draw();
}

document.addEventListener('keydown', (e)=>{
    if(e.code == 'Space'){
        event.preventDefault();
        if(gameState == 0){
            gameState = 1; // 게임실행
            startGame();  // Start the game loop
            document.querySelector('h2').style.display = 'none';
        } else if(gameState == 1 && dino.y==200){ // 게임실행중일때 스페이스누르면
            jumpState = 1; // 점프중으로 변경
        }
    }
})

function startGame() {
    animation = requestAnimationFrame(frameAction);
}

function collisionDetection(dino, cactus){
    let xValue = cactus.x - ( dino.x + dino.width );
    let yValue = cactus.y - ( dino.y + dino.height );
    if( xValue < 0 && yValue < 0 ){ // 충돌!
        // 충돌 시 실행되는 코드
        life--;
        document.querySelector('#life').innerHTML = `Life: ${life}`;
        if(life == 0){
            alert('게임오버');
            gameState = 0;
            cancelAnimationFrame(animation);
            location.reload();
        }
        return -1;
    } else {
        return 1;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawLine(){
    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(700, 250);
    ctx.stroke();
}

// Initialize a counter variable
let clickCount = 0;

// Function to show the minigame when the click count reaches 5
function showMinigame() {
    if (clickCount === 5) {
        // Get the minigame div and set its display property to 'block'
        let minigameDiv = document.querySelector('.minigame');
        minigameDiv.style.display = 'block';
    }
}

// Function to increment the click count and show the minigame
function handleClick() {
    clickCount++;
    showMinigame();
}

// Add click event listeners to all image links
document.addEventListener('DOMContentLoaded', function () {
    let imageLinks = document.querySelectorAll('.panel a.image');
    imageLinks.forEach(function (link) {
        link.addEventListener('click', handleClick);
    });
});