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
    get isOdd () {
        return isOdd;
    }
});
const isEven = (value)=>value % 2 === 0;
const isOdd = (value)=>!isEven(value);
