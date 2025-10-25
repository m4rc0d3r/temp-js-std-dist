const EMPTY = "";
const SPACE = " ";
const NEW_LINE = "\n";
const SLASH = "/";
const BACKSLASH = "\\";
const COLON = ":";

const toLower = (value) => value.toLowerCase();
const toUpper = (value) => value.toUpperCase();
const capitalize = (value) => [value[0]?.toUpperCase(), value].join(SPACE);

function isFalsy(value) {
  return value === false || value === EMPTY || value === 0 || value === 0n || typeof value === "number" && isNaN(value) || value === null || value === void 0;
}
function isTruthy(value) {
  return !isFalsy(value);
}

export { BACKSLASH, COLON, EMPTY, NEW_LINE, SLASH, SPACE, capitalize, isFalsy, isTruthy, toLower, toUpper };
