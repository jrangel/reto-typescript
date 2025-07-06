"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        type: 'user',
        name: 'Bart Simpson',
        age: 25,
        occupation: 'Limpiador de chimeneas',
    },
    { type: 'admin', name: 'Marge Simpson', age: 32, role: 'Administradora' },
    { type: 'user', name: 'Lisa Simpson', age: 23, occupation: 'Astronauta' },
    {
        type: 'admin',
        name: 'Homero Simpson',
        age: 64,
        role: 'Salvador del Mundo',
    },
    {
        type: 'powerUser',
        name: 'Montgomery Burns',
        age: 45,
        role: 'Moderador',
        occupation: 'Acariciador de gatos',
    },
];
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function isPowerUser(person) {
    return person.type === 'powerUser';
}
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = "".concat(person.role, ", ").concat(person.occupation);
    }
    console.log("".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
console.log();
console.log('Power users:');
exports.persons.filter(isPowerUser).forEach(logPerson);
