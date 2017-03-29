var stage;
var fps = 60;
var balloons =[];
var gravity = 0.5;
var debug = false;
var balloonNum = 1;

function init () {
	try {
		stage = new createjs.Stage('stage-canvas');
		createjs.Ticker.addEventListener("tick", frameTick);
		createjs.Ticker.framerate = fps;
		var stageWidth = stage.canvas.width;
		var stageHeight = stage.canvas.height;
		console.log("Stage is set to: ");
		console.log("width (x): ", stageWidth);
		console.log("height (y): ", stageHeight);
		
		
		// we draw all balloons, we need to draw everything first then move if needed;
		for( i = 0; i < balloonNum; i++ ) {
			//var weight = rand(1, 10);
			var weight = 20;
			var rad = weight * 5;
			balloon = new Balloon(rad, gravity, weight);
			var posX = rand(0 + rad, stageWidth - rad);
			//var posY = rand(-stageHeight, stageHeight);
			//var posY = rand(0, stageHeight - rad);
			//var posX = 50;
			var posY = -0;
			balloon.draw(posX, posY, stage);
			balloons.push(balloon);
		}
		
	}catch (e) {
		console.log(e.name,": ", e.message);
		createjs.Ticker.removeAllEventListeners('tick'); 
		if (debug)
			console.log(e.stack);
	}
}

function frameTick(event) {
	try {
		for(i = 0; i < balloons.length; i++) {
			balloons[i].move();
		}
	
	stage.update();
	}catch (e){
		// we are removing the tick. Stopping the game. Freezing it. Best way to handle exceptions.
		createjs.Ticker.removeAllEventListeners('tick'); 
		//show the exception
		console.log(e.name,": ", e.message);
		if (debug)
			console.log(e.stack);
	}
}

function rand(min, max) {
  return Math.floor( Math.random() * (max - min) + min );
}

class PangException extends Error{
		constructor(message) {
			super(message); // always call super before 'this'. Otherwise an error will follow. We cannot do anything if there is a parent constructor
			this.name = "PangException";
		}
}