class Balloon {
	constructor(rad, gravity, weight) {
		this.rad = rad;
		this.weight = weight;
		this.gravity = gravity;
		this.velocity = gravity;
		this.shape = new createjs.Shape();
		this.terminalV = weight + 5 * this.gravity;
		this.stage = undefined;
		this.rubberResistence = 0.7; // should very between 0 to 1
		this.dirUp = 1;
		this.dirDown = 0;
		this.direction = this.dirDown; 
		this.kineticForce = 0; // this is the force that the object hits the ground or border. It will loose that much force from its velocity
	}
		
	draw(posX, posY, stage) {
		if (stage == undefined)
			throw new PangException("Stage is undefined, balloon cannot be drawn without stage");
		this.stage = stage;
		this.shape.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, this.rad);
		this.shape.x = posX; // set the pos X
		this.shape.y = posY; // set the pos Y
		//this.velocity = this.weight * posY;
		//this.terminalV = weight + 5 * this.gravity;
		stage.addChild(this.shape);
	}
	
	move() {
		this.bounce(); //aways see if we have to bounce
		//throw new PangException("Undefined Position of balloon");
		if ( this.direction == this.dirDown ) 
			this.moveDown();
		else 
			this.moveUp();
	}
	
	moveDown() {
		this.shape.y += this.gravity;
		if ( this.terminalV > this.velocity ) 
			this.velocity += this.gravity; //increasing it per frame
		
	}
	
	moveUp() {
		this.shape.y -= this.gravity;
		if ( this.velocity > 0 ) 
			this.velocity -= this.gravity;
		//console.log("moving Up");
		//throw new PangException("Stop");
	}
	
	bounce() {
		//check if we hit anything
		if ( (this.shape.y + this.rad) >= this.stage.canvas.height + 5 ) {
			this.kineticForce = ( this.weight/2 ) * Math.pow(this.velocity, 2);
			//console.log("Current speed", this.velocity );
			//console.log("Kinetic energy" , this.kineticForce);
			this.direction = this.dirUp; //go up;
			console.log("Current V before: ", this.velocity);
			this.velocity = this.velocity * this.rubberResistence;
			console.log("Current V: ", this.velocity);
			//throw new PangException("Stop");
		}
		if ( this.velocity <= 0 ) {
			console.log("Reach equilibrium" , this.velocity);
			this.direction = this.dirDown;
			this.velocity = 0;
			//throw new PangException("Stop");
		}
	}
}