"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Alvaro Castillo', age: 25, occupation: 'Ingeniero de Software' },
    { type: 'admin', name: 'Javier Castillo', age: 32, role: 'Estudiante' },
    { type: 'user', name: 'Maria Isabel Hernandez', age: 23, occupation: 'Abogada' },
    { type: 'admin', name: 'Jorge Perez', age: 64, role: 'Contador' },
];
// person is Admin, le indica a TypeScript que la función devuelve un tipo Admin si es cierto
function isAdmin(person) {
    return person.type === 'admin';
}
exports.isAdmin = isAdmin;
// person is User, le indica a TypeScript que la función devuelve un tipo User si es cierto
function isUser(person) {
    return person.type === 'user';
}
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    // Adicionamos "else" para evitar hacer 2 comparaciones de forma innecesaria
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    else if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
