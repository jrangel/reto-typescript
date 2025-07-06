// SE CREA ESTA INTERFAZ BASE PARA EXTENDER SUS PROPIEDADES EN LOS TIPOS User Y Admin
export interface PersonBase {
  name: string;
  age: number;
}

export interface User extends PersonBase {
  occupation: string;
}

export interface Admin extends PersonBase {
  role: string;
}

// SE CREA UN UNION TYPE PARA COMBINAR User Y Admin
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

export function logPerson(user: Person): void {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);