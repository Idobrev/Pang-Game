class PangException extends Error{
	constructor(message) {
		super(message); // always call super before 'this'. Otherwise an error will follow. We cannot do anything if there is a parent constructor
		this.name = "PangException";
	}
}