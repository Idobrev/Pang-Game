class Level {
	constructor(stage) {
		if (new.target === Level) {
		  throw new TypeError("Cannot construct Abstract instances directly");
		}
		this.stage = stage;
		this.stageWidth = this.stage.canvas.width;
		this.stageHeight = this.stage.canvas.height;
		this.levelCreated = false;
	}
	
	createLevel(){}
	clearLevel(){}
	frame(){}
}