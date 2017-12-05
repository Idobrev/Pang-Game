var objectQ1 = [];//object quadrant 1 
var objectQ2 = [];//object quadrant 2 
var objectQ3 = [];//object quadrant 3 
var objectQ4 = [];//object quadrant 4
var global_currentLevelNumber = 1; //probably preload from a cache
var global_previousLevelNumber = undefined;
var global_currentLevel = undefined;
var global_currentChar = undefined;
var global_stage;
var global_queue;
var global_defaultCharType = 1;
var currentTime = Date.now();
var frametime = currentTime + frametimeDiff;

function init () {
	try {
		//probably reset stage and tick
		global_stage = new createjs.Stage('stage-canvas');
		createjs.Ticker.addEventListener("tick", frameTick);
		createjs.Ticker.setFPS(global_fps);
		var stageWidth = global_stage.canvas.width;
		var stageHeight = global_stage.canvas.height;
		console.log("Stage is set to: ");
		console.log("width (x): ", stageWidth);
		console.log("height (y): ", stageHeight);
		
		// init assets loader.
		// manifest comes from manifest.js file, so it should be visible
		global_queue = new createjs.LoadQueue(true);
		//global_queue.on("complete", handleComplete, this);
		
	}catch (e) {
		console.log(e.name,": ", e.message);
		if (debug)
			console.log(e.stack);
		createjs.Ticker.removeAllEventListeners('tick');
	}
}

function getLevel(number) {
	if ( global_currentLevelNumber != global_previousLevelNumber || global_previousLevelNumber == undefined) {
		switch(number) {
		case 1:
			return new Level1();
			break;
		case 2:
			console.log("Unfinished");
			break;
		default:
			//default level
		}
	}
}

function getChar(type) {
	switch (type) {
		case 1: 
		return new Std_char();
	}
}

function frameTick(event) {
	try {
		if ( useFrames || currentTime >= frametime ) {
			frametime = currentTime + frametimeDiff; //calculate when the next frame is gunna happen
			
			//probably loader slider if needed here?
			
			
			//find out the current level and draw the frame for it
			//get the current level
			if ( global_currentLevel == undefined ) {
				global_currentLevel = getLevel(global_currentLevelNumber);
				global_currentLevel.createLevel();
			}
			global_currentLevel.frame();
			
			// Create char
			if ( global_currentChar == undefined ) {
				global_currentChar = getChar(global_defaultCharType);
				global_currentChar.load();
			}
			global_currentChar.frame();
			
			//collision detection
			
			//console.log(global_currentChar.currentAnimationFrame);
			global_previousLevelNumber = global_currentLevelNumber;
			global_stage.update();
		}
		currentTime = Date.now();
		
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
