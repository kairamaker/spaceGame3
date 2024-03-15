
var spaceshipImg1, spaceship1, bgImg, spaceshipImg2, spaceship2
var database, gameState
var form, player, game
var playerCount
var allPlayers
var astroidImg

function preload(){
    bgImg= loadImage("./assets/background.jpeg")
    spaceshipImg1= loadImage("./assets/spaceship1.png")
    spaceshipImg2= loadImage("./assets/spaceship2.png")
    astroidImg = loadImage("./assets/meteor.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    database=firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    background(bgImg);

    if(playerCount===2){
        game.updateState(1);
    }
    if(gameState===1){
        game.play();
    }
}