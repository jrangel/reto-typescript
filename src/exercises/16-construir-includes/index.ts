/* _____________ Aqui va tu codigo _____________ */
// Implementa un tipo genérico Includes<T, U> que recibe dos tipos:
// T: Un arreglo de tipo `readonly
// U: Un tipo cualquiera
// El tipo debe devolver true si el tipo U está incluido en el arreglo T, y false en caso contrario.
// Utiliza el tipo Equal para comparar los tipos y determinar si U está incluido en T.
type Includes<T extends readonly any[], U> = 
  T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U>:false

/* _____________ Casos de prueba  _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Includes<['David', 'Gohan', 'Trunks', 'Sam'], 'David'>, true>>,
  Expect<Equal<Includes<['David', 'Gohan', 'Trunks', 'Sam'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
];
