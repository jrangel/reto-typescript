import { PersonBase } from '../2-union-de-tipados/index';  // REUTILIZAMOS PARTE DEL EJERCICIO 2

interface User extends PersonBase {
  occupation: string;
}

interface Admin extends PersonBase {
  role: string;
}

export type Person = (User | Admin);

export const persons: Person[] = [
  {
    name: 'Alvaro Castillo',
    age: 25,
    occupation: 'Ingeniero de Software',
  },
  {
    name: 'Javier Castillo',
    age: 32,
    role: 'Estudiante',
  },
  {
    name: 'Maria Isabel Hernandez',
    age: 23,
    occupation: 'Abogada',
  },
  {
    name: 'Jorge Perez',
    age: 64,
    role: 'Contador',
  },
];

export function logPerson(person: Person): void {
  let additionalInformation: string;
  // DETERMINAMOS SI LA PROPIEDAD EXISTE, PERO DE FORMA DISTINTA PARA EVITAR ERRORES
  // PARA UTILIZAR person.role O person.occupation, hay que garantizar que la propiedad exista.
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
