"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("./case.cjs"), exports);
_export_star(require("./consts.cjs"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
