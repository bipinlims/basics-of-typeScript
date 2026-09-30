// typescript has many types that helps in type manipulations and is called utility types

//*partial
// ->makes all properties in object optional
interface Student {
    name: string;
    roll: string;
}
let john: Partial<Student> = {
    //none properties are compulsory
}

//*Required
//->makes all properties of object compulsory
interface Car {
    carNumber: number;
    name: string;
    engine?: number

}
let car: Required<Car> = {
    carNumber: 12,
    name: "Ford",
    engine: 4000,
}

//*Record
//-> is used for creating shortcut of object type using key and value pair type
let dogAge: Record<string, number> = {
    dog1: 12,
    dog2: 11,
    dog3: 4,
}

//*Omit
//->Omit removes keys from object type
interface Data {
    name: string,
    age: number,
    address: string
}
let data1: Omit<Data, "name" | "age"> = {
    address: "Nepal",
}
console.log(data1);

//*Pick
//->removes all properties but keeps selected
interface Bird {
    name: string;
    type: string;
    size: number;
}
let bird: Pick<Bird, "name"> = {
    name: "kade vyakur",
}
console.log(bird);

//*Exclude
//->removes types from union
type Primitive=string|number|boolean;
const exclude:Exclude<Primitive,string>=true;

//*