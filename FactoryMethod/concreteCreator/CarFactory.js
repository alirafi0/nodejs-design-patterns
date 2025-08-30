import VehicleFactory from "../interface/vehicleFactoryInterface.js";
import Car from "../concreteProduct/car.js";

// Concrete Creator
export default class CarFactory extends VehicleFactory {
  makeVehicle() {
    const car = new Car();
    car.setColor("green");
    return car;
  }
}
