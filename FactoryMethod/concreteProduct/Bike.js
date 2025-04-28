import VehicleInterface from "../interface/VehinceInterface.js";

// concrete product
export default class Bike extends VehicleInterface {
	color;
	setColor(color) {
		this.color = color;
	}

	setMode(mode) {
		this.mode = mode;
	}

	move() {
		console.log(`the ${this.color} Bike is moving...`);
	}
}
