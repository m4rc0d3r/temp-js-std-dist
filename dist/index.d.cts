type Falsy = false | 0 | 0n | "" | null | undefined;
type Truthy<T> = Exclude<T, Falsy>;
declare function isFalsy(value: unknown): value is Falsy;
declare function isTruthy<T>(value: T): value is Truthy<T>;

type bool_Falsy = Falsy;
type bool_Truthy<T> = Truthy<T>;
declare const bool_isFalsy: typeof isFalsy;
declare const bool_isTruthy: typeof isTruthy;
declare namespace bool {
  export { bool_isFalsy as isFalsy, bool_isTruthy as isTruthy };
  export type { bool_Falsy as Falsy, bool_Truthy as Truthy };
}

declare const toLower: <T extends string>(value: T) => Lowercase<T>;
declare const toUpper: <T extends string>(value: T) => Uppercase<T>;
declare const capitalize: (value: string) => string;

declare const EMPTY = "";
declare const SPACE = " ";
declare const NEW_LINE = "\n";
declare const SLASH = "/";
declare const BACKSLASH = "\\";
declare const COLON = ":";

declare const index_BACKSLASH: typeof BACKSLASH;
declare const index_COLON: typeof COLON;
declare const index_EMPTY: typeof EMPTY;
declare const index_NEW_LINE: typeof NEW_LINE;
declare const index_SLASH: typeof SLASH;
declare const index_SPACE: typeof SPACE;
declare const index_capitalize: typeof capitalize;
declare const index_toLower: typeof toLower;
declare const index_toUpper: typeof toUpper;
declare namespace index {
  export {
    index_BACKSLASH as BACKSLASH,
    index_COLON as COLON,
    index_EMPTY as EMPTY,
    index_NEW_LINE as NEW_LINE,
    index_SLASH as SLASH,
    index_SPACE as SPACE,
    index_capitalize as capitalize,
    index_toLower as toLower,
    index_toUpper as toUpper,
  };
}

export { bool as Bool, index as Str };
