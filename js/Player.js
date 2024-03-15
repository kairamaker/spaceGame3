class Player{
    constructor(){
        this.name= null
        this.positionX=0
        this.positionY=0
        this.score=0;
        this.life=200;
        this.rank=0
        this.index=null

    }
    getPlayerCount(){
        database.ref("playerCount").on("value", data =>{
            playerCount=data.val()
        });
    }
    updatePlayerCount(count){
        database.ref("/").update(
            {
                playerCount : count
            }
        )
    }

    addPlayer(){
        var playerIndex="players/player" + this.index
        if(this.index===1){
            this.positionX=200

        }
        else{
            this.positionX = windowWidth-200
        }
        
       database.ref(playerIndex).set(
            {
                name : this.name,
                score: this.score,
                positionX : this.positionX,
                positionY : this.positionY,
                life :  this.life
            }
        )
    }

    getPlayerInfo(){
        database.ref("players").on("value",data=>{
            allPlayers=data.val();

        });
    }

    update(){
        var playerIndex = "players/player"+this.index ;

        database.ref(playerIndex).update(
            {
                positionX :this.positionX,
                positionY :this.positionY,
                score : this.score,
                life : this.life
            }
        );

    }

    getDistance(){
        var playerDistanceRef = database.ref("player/player"+this.index);
        playerDistanceRef.on("value",data =>{
            var data = data.val();
            this.positionX = data.positionX
            this.positionY = data.positionY
            
        })
    }

}