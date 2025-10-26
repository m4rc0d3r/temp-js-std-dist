declare const toLower: <T extends string>(value: T) => Lowercase<T>;
declare const toUpper: <T extends string>(value: T) => Uppercase<T>;
declare const capitalize: (value: string) => string;
export { capitalize, toLower, toUpper };
