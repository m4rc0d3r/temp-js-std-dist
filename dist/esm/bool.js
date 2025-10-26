import { EMPTY } from "./str";
function isFalsy(value) {
    return value === false || value === EMPTY || value === 0 || value === 0n || typeof value === "number" && isNaN(value) || value === null || value === undefined;
}
function isTruthy(value) {
    return !isFalsy(value);
}
export { isFalsy, isTruthy };
