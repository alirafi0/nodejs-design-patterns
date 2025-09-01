import PrideBuilder from "./concreteBuilder/prideBuilder.js";
import LamboBuilder from "./concreteBuilder/lamboBuilder.js";
import CarDirector from "./director/carDirector.js";

const prideBuilder = new PrideBuilder();
const carDirector = new CarDirector(prideBuilder);
carDirector.makeCar();
console.log(prideBuilder.car);


const lamboBuilder = new LamboBuilder();
const carDirector2 = new CarDirector(lamboBuilder);
carDirector2.makeCar();
console.log(lamboBuilder.car);