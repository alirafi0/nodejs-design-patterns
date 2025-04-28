import CarFactory from "./concreteCreator/CarFactory.js";
import BikeFactory from "./concreteCreator/BikeFactory.js";

const car = new CarFactory();
car.handle();

const bike = new BikeFactory();
bike.handle();