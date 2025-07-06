import { P } from 'vitest/dist/chunks/environment.d.cL3nLXbE.js';
import { PersonBase } from '../2-union-de-tipados/index';  // REUTILIZAMOS PARTE DEL EJERCICIO 2

export interface PersonType extends PersonBase {
  type: string;
}

export interface User extends PersonType {
  occupation: string;
}

export interface Admin extends PersonType {
  role: string;
}

export type Person = (User | Admin);

export const persons: Person[] = [
  { type: 'user', name: 'Alvaro Castillo', age: 25, occupation: 'Ingeniero de Software' },
  { type: 'admin', name: 'Javier Castillo', age: 32, role: 'Estudiante' },
  { type: 'user', name: 'Maria Isabel Hernandez', age: 23, occupation: 'Abogada' },
  { type: 'admin', name: 'Jorge Perez', age: 64, role: 'Contador' },
];

// person is Admin, le indica a TypeScript que la función devuelve un tipo Admin si es cierto
export function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

// person is User, le indica a TypeScript que la función devuelve un tipo User si es cierto
export function isUser(person: Person): person is User {
  return person.type === 'user';
}

export function logPerson(person: Person): void {
  let additionalInformation: string = '';
  // Adicionamos "else" para evitar hacer 2 comparaciones de forma innecesaria
  if (isAdmin(person)) {
    additionalInformation = person.role;
  } else if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
