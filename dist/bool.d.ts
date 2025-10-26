type Falsy = false | 0 | 0n | "" | null | undefined;
type Truthy<T> = Exclude<T, Falsy>;
declare function isFalsy(value: unknown): value is Falsy;
declare function isTruthy<T>(value: T): value is Truthy<T>;
export { isFalsy, isTruthy };
export type { Falsy, Truthy };
