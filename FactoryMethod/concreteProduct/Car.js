import VehicleInterface from "../interface/VehinceInterface.js";

//concrete Product
export default class Car extends VehicleInterface {
	color;
	setColor(color) {
		this.color = color;
	}

	move() {
		console.log(`the ${this.color} Car is moving...`);
	}
}
