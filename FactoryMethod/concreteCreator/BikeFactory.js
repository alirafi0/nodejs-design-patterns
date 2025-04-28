import VehicleFactory from "./VehicleFactory.js";
import Bike from "../concreteProduct/Bike.js";

// Concrete Creator
export default class BikeFactory extends VehicleFactory {
	makeVehicle() {
		const bike = new Bike();
		bike.setColor("red");
		return bike;
	}
}