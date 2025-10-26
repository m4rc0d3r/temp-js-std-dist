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
    get capitalize () {
        return capitalize;
    },
    get toLower () {
        return toLower;
    },
    get toUpper () {
        return toUpper;
    }
});
const _consts = require("./consts.cjs");
const toLower = (value)=>value.toLowerCase();
const toUpper = (value)=>value.toUpperCase();
const capitalize = (value)=>[
        value[0]?.toUpperCase(),
        value
    ].join(_consts.SPACE);
