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
    get isFalsy () {
        return isFalsy;
    },
    get isTruthy () {
        return isTruthy;
    }
});
const _str = require("./str/index.cjs");
function isFalsy(value) {
    return value === false || value === _str.EMPTY || value === 0 || value === 0n || typeof value === "number" && isNaN(value) || value === null || value === undefined;
}
function isTruthy(value) {
    return !isFalsy(value);
}
