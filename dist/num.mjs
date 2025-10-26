const isEven = (value)=>value % 2 === 0;
const isOdd = (value)=>!isEven(value);
const toInt = (value)=>Math.floor(value);
const isInt = (value)=>Number.isInteger(value);
export { isEven, isInt, isOdd, toInt };
