import { Matrix } from "./Matrix";
import { Coord } from "./Coord";

const example = new Matrix(2,2);
example.addTenant(null, (coord:Coord)=>{return ['name' => 'Jack',]});
example.addTenant(null, "Jack");
example.addTenant(null, "Jack");
example.addTenant(null, "Jack");
example.addTenant(null, "Jack");
example.addTenant(null, "Jack");
example.addTenant(null, "Jack");

