class GameObject {
	constructor() {
		if (new.target === GameObject) { //Prevents user from instancing the Object class. It needs to be extended.
		  throw new TypeError("Cannot construct Abstract instances directly. GameObject class must be extended");
		}
		this.shape = new createjs.Shape();
		this.stage = undefined;
		this.visible = true;
	}
	//abstract method. Every object should have
	draw(posX, posY, stage) {}
	
	getPosition() {
		if ( stage == undefined ) 
			throw new PangException("Object's draw method must be used first.");
		return { posX:this.stage.x, posY:this.stage.y};
	}
}