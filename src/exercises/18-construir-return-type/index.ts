/* _____________ Aqui va tu codigo _____________ */
// MyReturnType es un tipo que toma una función y devuelve el tipo de retorno de esa función.
// Utiliza la inferencia de tipos para extraer el tipo de retorno de la función dada
// y lo asigna a R. Si T no es una función, devuelve never.
// La sintaxis T extends (...args: any[]) => infer R ,  permite capturar el tipo
// de retorno de una función sin importar los tipos de sus argumentos.
type MyReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;

/* _____________ Casos de prueba  _____________ */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
];

type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);
