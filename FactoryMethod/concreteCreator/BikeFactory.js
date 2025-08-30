import VehicleFactory from "../interface/vehicleFactoryInterface.js";
import Bike from "../concreteProduct/bike.js";

// Concrete Creator
export default class BikeFactory extends VehicleFactory {
  makeVehicle() {
    const bike = new Bike();
    bike.setColor("red");
    return bike;
  }
}
