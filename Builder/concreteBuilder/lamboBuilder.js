import CarBuilderInterface from "../builder/carBuilder.js";
import Car from "../product/car.js";

export default class LamboBuilder extends CarBuilderInterface {
  constructor() {
    super();
    this.car = new Car();
  }

  setColor() {
    this.car.color = "yellow";
    return this;
  }

  setSeats() {
    this.car.seats = 2;
    return this;
  }

  setEngine() {
    this.car.engine = "v12";
    return this;
  }

  setGps() {
    this.car.hasGps = true;
    return this;
  }

  setSunroof() {
    this.car.hasSunroof = true;
    return this;
  }

  setHeatedSeats() {
    this.car.hasHeatedSeats = true;
    return this;
  }

  setParkingSensors() {
    this.car.haParkingSensors = true;
    return this;
  }

  setAbs() {
    this.car.hasAbs = true;
    return this;
  }
}
