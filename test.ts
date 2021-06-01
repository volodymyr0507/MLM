import { Matrix } from "./Matrix";
import { Coord } from "./Coord";

const example = new Matrix(2,2);
/*example.addTenant(null, function(coord:Coord){
	return [
		name => 'Jone',
	]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'black',
  ]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'Jeff',
  ]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'arge',
  ]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'alex',
  ]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'queens',
  ]
});
example.addTenant(null, function(coord:Coord){
  return [
    name => 'brown',
  ]
});*/

example.addTenant(null, "John");
example.addTenant(null, "Jack");
example.addTenant(null, "Perkin");
example.addTenant(null, "Todo");
example.addTenant(null, "Asus");
example.addTenant(null, "Back");
example.addTenant(null, "Tom");
console.log(example);