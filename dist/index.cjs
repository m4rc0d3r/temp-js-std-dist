'use strict';

const EMPTY = "";
const SPACE = " ";
const NEW_LINE = "\n";
const SLASH = "/";
const BACKSLASH = "\\";
const COLON = ":";

const toLower = (value) => value.toLowerCase();
const toUpper = (value) => value.toUpperCase();
const capitalize = (value) => [value[0]?.toUpperCase(), value].join(SPACE);

const index = {
  __proto__: null,
  BACKSLASH: BACKSLASH,
  COLON: COLON,
  EMPTY: EMPTY,
  NEW_LINE: NEW_LINE,
  SLASH: SLASH,
  SPACE: SPACE,
  capitalize: capitalize,
  toLower: toLower,
  toUpper: toUpper
};

function isFalsy(value) {
  return value === false || value === EMPTY || value === 0 || value === 0n || typeof value === "number" && isNaN(value) || value === null || value === void 0;
}
function isTruthy(value) {
  return !isFalsy(value);
}

const bool = {
  __proto__: null,
  isFalsy: isFalsy,
  isTruthy: isTruthy
};

exports.Bool = bool;
exports.Str = index;
