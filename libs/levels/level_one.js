class Level_one extends Level {
	constructor(stage) {
		super(stage);
		this.balloons =[]; //probably should be in the level
		this.gravity = 0.5; // probably should be in the level
		this.balloonNum = 1; // probably should be in the level
	}
	
	createLevel(){
		if ( this.levelCreated == false ) {
			this.levelCreated = true;
			// we draw all balloons, we need to draw everything first then move if needed;
			for( var i = 0; i < this.balloonNum; i++ ) {
				//var weight = rand(3, 10);
				var weight = 5;
				var rad = weight * 5;
				var posX = rand(0 + rad, this.stageWidth - rad);
				//var posY = rand(-stageHeight, stageHeight);
				var posY = rand(0, this.stageHeight/2 - rad);
				//var posX = 50;
				//var posY = -0;
				
				var balloon = new Balloon(rad, this.gravity, weight);
				balloon.draw(posX, posY, this.stage);
				this.balloons.push(balloon);
			}
		}
	}
	
	frame(){
			for( var i = 0; i < this.balloons.length; i++) {
				this.balloons[i].move();
			}
	}
}