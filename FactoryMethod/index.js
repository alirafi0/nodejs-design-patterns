import CarFactory from "./concreteCreator/carFactory.js";
import BikeFactory from "./concreteCreator/bikeFactory.js";

const car = new CarFactory();
car.handle();

const bike = new BikeFactory();
bike.handle();