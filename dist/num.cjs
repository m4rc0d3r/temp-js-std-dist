"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isEven () {
        return isEven;
    },
    get isInt () {
        return isInt;
    },
    get isOdd () {
        return isOdd;
    },
    get toInt () {
        return toInt;
    }
});
const isEven = (value)=>value % 2 === 0;
const isOdd = (value)=>!isEven(value);
const toInt = (value)=>Math.floor(value);
const isInt = (value)=>Number.isInteger(value);
