// Estas declaraciones de tipado genérico permiten 
// que el desarrollador visualice los tipos de datos
// que se esperan en las funciones y cómo se pueden utilizar
declare module 'stats' {
    type CompareUsers<T> = (a: T, b: T) => number;
    type GetAverageValue<T> = (input: T) => number;

    export function getMaxIndex<T>(input: T[], comparator: CompareUsers<T>): number;
    export function getMaxElement<T>(input: T[], comparator: CompareUsers<T>): T | null;
    export function getMinIndex<T>(input: T[], comparator: CompareUsers<T>): number;
    export function getMinElement<T>(input: T[], comparator: CompareUsers<T>): T | null;
    export function getMedianIndex<T>(input: T[], comparator: CompareUsers<T>): number;
    export function getMedianElement<T>(input: T[], comparator: CompareUsers<T>): T | null;

    export function getAverageValue<T>(input: T[], getValue: GetAverageValue<T>): number;
}
