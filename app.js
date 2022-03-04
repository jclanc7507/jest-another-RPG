const Game = require('./lib/Game');
const Player = require('./lib/Player');

new Game().initializeGame() 
    .then(({ name }) => {
        this.player = new Player(name);

        this.startNewBattle()             
            console.log('Your stats are as follows:');
            console.table(this.player.getStats());
            console.log(this.currentEnemy.getDescription());
            this.battle()
    });