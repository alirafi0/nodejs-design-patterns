// vehicle factory interface
export default class VehicleFactory {
	makeVehicle() {
		throw new Error("move makeVehicle must be implement...")
	}

	handle() {
		const vehicle = this.makeVehicle();
		vehicle.move()
	}
}
