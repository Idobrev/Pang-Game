class Balloon extends Object{
	constructor(rad, gravity, weight) {
		super();
		this.rad = rad;
		this.weight = weight;
		this.gravity = gravity;
		this.velocity = gravity;
		this.shape = new createjs.Shape();
		this.terminalV = weight * weight * this.gravity * 5;
		this.rubberResistence = 0.87; // should very between 0 to 1
		this.angularVelocity = 5; //this is pixels traveled per frame. 
		this.dirDown = 0;
		this.dirUp = 1;
		this.dirRight = 2;
		this.dirLeft = 3;
		this.direction = this.dirDown; 
		this.kineticForce = 0; // this is the force that the object hits the ground or border. It will loose that much force from its velocity
		this.stop = false;
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
		if ( this.stop )
			return;
		this.bounce(); //aways see if we have to bounce
		//throw new PangException("Undefined Position of balloon");
		this.moveSideways();
		if ( this.direction == this.dirDown ) 
			this.moveDown();
		else 
			this.moveUp();
	}
	
	moveSideways() {
		if ( this.dirRight ) 
			this.shape.x += this.angularVelocity;
		else 
			this.shape.x -= this.angularVelocity;
	}
	
	moveDown() {
		this.shape.y += this.velocity;
		console.log(this.velocity);
		if ( this.terminalV > this.velocity ) 
			this.velocity += this.gravity; //increasing it per frame
	}
	
	moveUp() {
		this.shape.y -= this.velocity;
		if ( this.velocity > 0 ) 
			this.velocity -= this.gravity;
	}
	
	bounce() {
		//check if we hit anything
		if ( (this.shape.y + this.rad) >= this.stage.canvas.height && this.direction == this.dirDown ) {
			//this.kineticForce = ( this.weight/2 ) * Math.pow(this.velocity, 2);
			//console.log("Current speed", this.velocity );
			//console.log("Kinetic energy" , this.kineticForce);
			this.direction = this.dirUp; //go up;
			console.log("Current V before: ", this.velocity);
			this.velocity = Math.floor(this.velocity * this.rubberResistence);
			if ( this.velocity == 0 ) 
			this.stop = true;
			console.log("Current V: ", this.velocity);
			//throw new PangException("Stop");
			return;
		}
		if ( this.direction == this.dirUp && this.velocity <= this.gravity ) {
			console.log("Reach equilibrium" , this.velocity);
			this.direction = this.dirDown;
			this.velocity = 0;
			//throw new PangException("Stop");
			return;
		}
	}
}