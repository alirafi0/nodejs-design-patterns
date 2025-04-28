import VehicleFactory from "./VehicleFactory.js";
import Car from "../concreteProduct/Car.js";

// Concrete Creator
export default class CarFactory extends VehicleFactory {
	makeVehicle() {
		const car = new Car();
		car.setColor("green");
		return car;
	}
}