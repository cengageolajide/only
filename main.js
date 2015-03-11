// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		this.game.stage.backgroundColor = "#3498db";

		//Donda
		this.game.load.image('donda', 'assets/donda.png');

    },

    create: function() { 

    	this.donda = this.game.add.sprite(100, 245, 'donda');
    	var donda = this.donda;

    	donda.body.gravity.y = 1000; 
    	// Call the 'jump' function when the spacekey is hit
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this); 
        // setting gyroscope update frequency
          gyro.frequency = 10;
		// start gyroscope detection
          gyro.startTracking(function(o) {
               // updating player velocity
              donda.body.velocity.x += o.gamma/20;
          });  
    },

    jump: function(){
    	this.donda.body.velocity.y = -350;

    },
    
    update: function() {
		// Function called 60 times per second
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 