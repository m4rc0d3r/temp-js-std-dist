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
    get BACKSLASH () {
        return BACKSLASH;
    },
    get COLON () {
        return COLON;
    },
    get EMPTY () {
        return EMPTY;
    },
    get NEW_LINE () {
        return NEW_LINE;
    },
    get SLASH () {
        return SLASH;
    },
    get SPACE () {
        return SPACE;
    }
});
const EMPTY = "";
const SPACE = " ";
const NEW_LINE = "\n";
const SLASH = "/";
const BACKSLASH = "\\";
const COLON = ":";
