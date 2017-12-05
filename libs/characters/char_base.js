class Char_base {
	constructor() {
		this.posX = 0;
		this.posY = 0;
	}
	
	//abstract method. Every object should have
	draw() {}
	
	//default load method to load a char
	load(manifest) {
		global_queue.on("complete", this.draw ) 
		global_queue.loadManifest(manifest,true);
		global_queue.load();
	}
}