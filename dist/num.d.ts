import type { JsonValue } from "type-fest";
declare const isEven: (value: number) => boolean;
declare const isOdd: (value: number) => boolean;
declare const toInt: (value: number) => number;
declare const isInt: (value: number) => boolean;
declare function parseJson(value: string): unknown;
declare function toJson(value: JsonValue): void;
export type { ArrayElement } from "type-fest";
export { isEven, isInt, isOdd, parseJson, toInt, toJson };
