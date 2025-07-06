"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.logPerson = logPerson;
exports.users = [
    {
        name: 'Alvaro Castillo',
        age: 25,
        occupation: 'Ingeniero de Software',
    },
    {
        name: 'Javier Castillo',
        age: 23,
        occupation: 'Estudiante',
    },
];
function logPerson(user) {
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
console.log('Users:');
exports.users.forEach(logPerson);
