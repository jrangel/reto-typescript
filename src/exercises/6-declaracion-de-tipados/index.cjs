"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        type: 'user',
        name: 'Javier Castillo',
        age: 25,
        occupation: 'Ingeniero de Software',
    },
    { type: 'admin', name: 'Javier Castillo', age: 32, role: 'Estudiante' },
    {
        type: 'user',
        name: 'Maria Isabel Hernandez',
        age: 23,
        occupation: 'Abogada',
    },
    { type: 'admin', name: 'Jorge Perez', age: 64, role: 'Contador' },
    { type: 'user', name: 'Carla Perez', age: 23, occupation: 'Contadora' },
    { type: 'admin', name: 'Andres Perez', age: 23, role: 'Administrator' },
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
exports.logPerson = logPerson;
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
