/* _____________ Aqui va tu codigo _____________ */
// MyLength es un tipo que calcula la longitud de una cadena de texto (string) 
// utilizando recursión y tuplas para contar los caracteres.
// Utiliza un tipo recursivo que toma una cadena de texto y un array de tuplas
// como parámetros. El array de tuplas se utiliza para acumular los caracteres
// a medida que se recorre la cadena. Cuando la cadena está vacía, el tipo
// devuelve la longitud del array de tuplas, que es igual a la longitud de la cadena
// original.
type MyLength<S extends string, X extends string[]=[]> = 
   S extends `${infer First}${infer Rest}`
  ? MyLength<Rest, [...X, First]>
  : X['length']; 



/* _____________ Casos de prueba  _____________ */

import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MyLength<'hola siigers'>, 12>>,
  Expect<Equal<MyLength<''>, 0>>,
  Expect<Equal<MyLength<'a'>, 1>>,
  Expect<Equal<MyLength<'Siigo'>, 5>>,
];
