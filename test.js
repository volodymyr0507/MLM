"use strict";
exports.__esModule = true;
var Matrix_1 = require("./Matrix");
var example = new Matrix_1.Matrix(2, 2);
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
