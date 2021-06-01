import { Matrix } from "./Matrix";
import { Coord } from "./Coord";

const example = new Matrix(2,2);


example.addTenant(null, "1");
example.addTenant(null, "2");
example.addTenant(null, "3");
example.addTenant(null, "4");
example.addTenant(null, "5");
example.addTenant(null, "6");
example.addTenant(null, "7");

console.log(example);