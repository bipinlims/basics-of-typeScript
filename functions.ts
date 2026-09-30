//eg.1
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3));

//* function expression
// eg.2 
type Input = (x: number, y: number) => number;
const subtract: Input = (e, f) => {
    return e - f;
}
console.log(subtract(10, 5));
//similar of eg.2
const sub = (c: number, d: number): number => {
    return c - d;
}
console.log(sub(4, 5));

//eg.3
const getFullName = (firstName: string, lastName: string): string => {
    return `Full name is: ${firstName} ${lastName}`;
}
console.log(getFullName("John", 'Doe'));

//*void function
// -> completes the function execution but does not return anything
// ->returns undefined
function Void(): void {
    console.log("void function");
    // return "hi";
}
console.log(Void());


//*never function
//->function never completes execution
//->execution either stops completely or loops indefinitely
// ->holds empty set
function neverFunction(): never {
    try {
        throw new Error("");
    } catch (error) {
        throw new Error("");
    }
}
