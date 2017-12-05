class Std_char extends Char_base {
	constructor() {
		super();
		this.load(std_char_manifest);
	}
	
	draw() {
		console.log("Loaded manifest");
		// draw the char animation here
			//create the spritesheet here
		var charSpriteSheet = new createjs.SpriteSheet({
			framerate: 0,
			"images": [global_queue.getResult("hero_idle")],
			"frames": {width:64, height:64, count:8, regX: 0, regY:30, spacing:0, margin:0},
			//"frames": {"regX": 82, "height": 64, "count": 64, "regY": 0, "width": 64},
			// define two animations, run (loops, 1.5x speed) and jump (returns to run):
			"animations": {
				"idle": [0,8]
			}
		});
		
		this.charIdleSprite = new createjs.Sprite(charSpriteSheet, "idle");
		
		this.charIdleSprite.x = this.posX;
		this.charIdleSprite.y = this.posY;
		this.charIdleSprite.name = "PotatoWarrior";
		
		global_stage.addChild(this.charIdleSprite);
		this.charIdleSprite.gotoAndPlay("idle");
		
	}
	
	frame() {
		
	}
}