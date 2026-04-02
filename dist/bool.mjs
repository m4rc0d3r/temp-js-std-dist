import { EMPTY } from "./str/index.mjs";
function isFalsy(value) {
    return value === 0 || value === false || value === EMPTY || value === 0n || typeof value === "number" && isNaN(value) || value === null || value === undefined;
}
function isTruthy(value) {
    return !isFalsy(value);
}
function isTrue(value) {
    return value === true;
}
export { isFalsy, isTrue, isTruthy };
