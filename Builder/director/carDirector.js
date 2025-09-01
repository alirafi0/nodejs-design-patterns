export default class CarDirector {
  constructor(carBuilder) {
    this.carBuilder = carBuilder;
  }

  makeCar() {
    this.carBuilder
      .setColor()
      .setSeats()
      .setEngine()
      .setGps()
      .setSunroof()
      .setHeatedSeats()
      .setParkingSensors()
      .setAbs();
  }
}
