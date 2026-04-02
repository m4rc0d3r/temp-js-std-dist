const isEven = (value)=>value % 2 === 0;
const isOdd = (value)=>!isEven(value);
const toInt = (value)=>Math.floor(value);
const isInt = (value)=>Number.isInteger(value);
function parseJson(value) {
    return JSON.parse(value);
}
function toJson(value) {
    JSON.stringify(value);
}
export { isEven, isInt, isOdd, parseJson, toInt, toJson };
