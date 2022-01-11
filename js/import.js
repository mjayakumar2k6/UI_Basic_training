import Greet, {cube, PI, Person} from "./export.js";

let ccube = cube(3);

let person = new Person();
person.greet();

console.log("ccube = ", ccube, PI);
