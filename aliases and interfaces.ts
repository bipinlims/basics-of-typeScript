//->used for creating custom type
//->aliases allow defining types custom name


//eg.1
type Gender = "male" | "female" | "others";
let gender: Gender = "male";
gender = "female";
gender = "others";

// eg.2
type BikeYear = number;
type BikeName = string;
type BikeEngine = number;
type Bike = {
    year: BikeYear;
    name: BikeName;
    engine: BikeEngine;
}
let bike_year = 2000;
let bike_name = "Pulsar";
let bike_engine = 220;

let bike: Bike = {
    year: bike_year,
    name: bike_name,
    engine: bike_engine,
}
console.log(bike);


//* Interfaces ->  interfaces are similar to type aliases except they only used in object types
// eg1.
type Rectangle = {
    height: number,
    width: number,
}
let rectangle: Rectangle = {
    height: 100,
    width: 200,
}
console.log(rectangle);