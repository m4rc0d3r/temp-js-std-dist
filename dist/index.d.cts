type Falsy = false | 0 | 0n | "" | null | undefined;
type Truthy<T> = Exclude<T, Falsy>;
declare function isFalsy(value: unknown): value is Falsy;
declare function isTruthy<T>(value: T): value is Truthy<T>;

declare const toLower: <T extends string>(value: T) => Lowercase<T>;
declare const toUpper: <T extends string>(value: T) => Uppercase<T>;
declare const capitalize: (value: string) => string;

declare const EMPTY = "";
declare const SPACE = " ";
declare const NEW_LINE = "\n";
declare const SLASH = "/";
declare const BACKSLASH = "\\";
declare const COLON = ":";

export { BACKSLASH, COLON, EMPTY, NEW_LINE, SLASH, SPACE, capitalize, isFalsy, isTruthy, toLower, toUpper };
export type { Falsy, Truthy };
