// Declaraciones de tipado para el módulo 'str-utils'
// segun las funciones creadas en el archivo /declarations/str-utils/index.ts
declare module 'str-utils' {
    type StringFn = (input: string) => string;

    export const strReverse: StringFn;
    export const strToUpper: StringFn;
    export const strToLower: StringFn;
    export const strRandomize: StringFn;
    export const strInvertCase: StringFn;
}