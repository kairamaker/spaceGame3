class Game{
    constructor(){
        this.restartButton = createButton("restart");
    }
    start(){
        player= new Player();
        playerCount = player.getPlayerCount();
        form = new Form();
        form.display();
        spaceship1=createSprite(300,200);
        spaceship1.addImage("spaceship1",spaceshipImg1);
        spaceship1.scale=0.2
        spaceship2=createSprite(700,200);
        spaceship2.addImage("spaceship2",spaceshipImg2);
        spaceship2.scale=0.2
        for(var i = 0; i<=20 ; i++){
            var x = random(100,width-100)
            var y = random(height,height*5);
            var astroid = createSprite(x,y);
            astroid.addImage(astroidImg)
        }

    }

    

    play(){
        form.greeting.hide();
        player.getPlayerInfo();
        
        if(allPlayers != undefined){
            image(bgImg,0,0,windowWidth,windowHeight*5);
            this.restartButton.position(300,400)
            this.handleRestartButton()
        var index = 0 ;
        for(var plr in allPlayers){
            index=index+1;
            var x = allPlayers[plr].positionX
            var y = allPlayers[plr].positionY

        
        }
        this.handlePlayerControls();
        console.log(player.positionX);
        drawSprites();
        }
        
    

    }

    handlePlayerControls(){
        if(keyIsDown(LEFT_ARROW)){
            player.positionX= player.positionX-5;
            player.update();
        
        }

        if(keyIsDown(RIGHT_ARROW)){
            player.positionX= player.positionX+5;
            player.update();
        
        }

        if(keyIsDown(DOWN_ARROW)){
            player.positionY=player.positionY-5;
            player.update();

        }
    }

    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    updateState(state){
        database.ref("/").update(
            {
                gameState:state
            }
        )
    }

    handleRestartButton(){
        this.restartButton.mousePressed(()=>{
            database.ref("/").set({
                playerCount : 0 , 
                gameState : 0
            })
            window.location.preload();
        });
    }

}