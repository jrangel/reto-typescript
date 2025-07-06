"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
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
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
