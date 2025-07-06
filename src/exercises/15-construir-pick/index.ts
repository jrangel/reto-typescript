
/* _____________ Aqui va tu codigo _____________ */
// My Pick es un tipo genérico que toma dos parámetros: T y K.
// T es un objeto y K es una unión de claves de T (title)('title' | 'completed')('title' | 'completed' | 'invalid'). 
// El resultado es un nuevo tipo que contiene solo las propiedades de T cuyas claves están en K.
type MyPick<T, K extends keyof T> = {[P in K]: T[P]}



/* _____________ Casos de prueba  _____________ */

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

