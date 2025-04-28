//Product Interface
export default class VehicleInterface {
	move() {
		throw new Error("move method must be implement...")
	}

	setColor() {
		throw new Error("setColor method must be implement...")
	}
}