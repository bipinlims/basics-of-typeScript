type TBox<T> = {
    value: T
}
let box1: TBox<string> = {
    value: "rectangle",
}
let box2: TBox<number> = {
    value: 20,
}
let box3: TBox<{ x: string, y: number }> = {
    value: {
        x: "eda",
        y: 12,
    }
}

//*generic function
const wrapper = <T>(data: T): T | T[] => {
    if (Array.isArray(data)) {
        return data;
    } else {
        return [data];
    }
}
console.log(wrapper('avb'));