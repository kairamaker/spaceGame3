class Form{
    constructor(){
        this.instructions= createElement("h4");
        this.input=createInput("Enter your name ");

        this.playButton=createButton("Click to Start");

        this.greeting = createElement("h4");


    }

    display(){
        this.instructions.html("Use arrow keys to navigate your spaceship and reach the end first. ")
        this.instructions.position(200,200);
        this.instructions.class("greeting");
        this.greeting.class("greeting");
        
        this.input.position(400,400);

        this.playButton.position(400,500);


        this.playButton.mousePressed(
            ()=>{
                this.input.hide();
                this.playButton.hide();
                this.instructions.hide();
                playerCount=playerCount+1
                player.updatePlayerCount(playerCount);
                player.name=this.input.value();
                player.index = playerCount
                this.greeting.position(200,200);
                player.addPlayer();
                this.greeting.html("Wait for the other player");
                player.getDistance()
            }
        );
    }



}