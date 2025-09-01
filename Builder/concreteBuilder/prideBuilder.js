import CarBuilderInterface from "../builder/carBuilder.js";
import Car from "../product/car.js";

export default class PrideBuilder extends CarBuilderInterface {
  constructor() {
    super();
    this.car = new Car();
  }

  setColor() {
    this.car.color = "white";
    return this;
  }

  setSeats() {
    this.car.seats = 4;
    return this;
  }

  setEngine() {
    this.car.engine = "Inline-4";
    return this;
  }

  setGps() {
    this.car.hasGps = false;
    return this;
  }

  setSunroof() {
    this.car.hasSunroof = false;
    return this;
  }

  setHeatedSeats() {
    this.car.hasHeatedSeats = false;
    return this;
  }

  setParkingSensors() {
    this.car.haParkingSensors = false;
    return this;
  }

  setAbs() {
    this.car.hasAbs = false;
    return this;
  }
}
