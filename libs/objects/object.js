class Object {
	constructor() {
		if (new.target === Object) {
		  throw new TypeError("Cannot construct Abstract instances directly");
		}
		this.shape = new createjs.Shape();
		this.stage = undefined;
		this.visible = true;
	}
	//abstract method. Every object should have
	draw(posX, posY, stage) {}
	
	getPosition() {
		if ( stage == undefined ) 
			throw new PangException("Object must be drawn first");
		return { posX:this.stage.x, posY:this.stage.y};
	}
}