const isEven = (value)=>value % 2 === 0;
const isOdd = (value)=>!isEven(value);
const toInt = (value)=>Math.floor(value);
export { isEven, isOdd, toInt };
