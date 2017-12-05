class Level {
	constructor() {
		if (new.target === Level) {
		  throw new TypeError("Cannot construct Abstract instances directly");
		}
		this.stageWidth = global_stage.canvas.width;
		this.stageHeight = global_stage.canvas.height;
		this.levelCreated = false;
	}
	
	createLevel(){}
	clearLevel(){}
	frame(){}
}