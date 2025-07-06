"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameDecorators = void 0;
var str_utils_1 = require("str-utils");
var admins = [
    { type: 'admin', name: 'Montgomery Burns', age: 81, role: 'Propietario de la Planta Nuclear de Springfield' },
    { type: 'admin', name: 'Seymour Skinner', age: 44, role: 'Director' },
    { type: 'admin', name: 'Edna Krabappel', age: 41, role: 'Maestra' },
    { type: 'admin', name: 'Clancy Wiggum', age: 45, role: 'Jefe de Policía' },
    { type: 'admin', name: 'Kent Brockman', age: 50, role: 'Presentador de Noticias' }
];
var users = [
    { type: 'user', name: 'Homer Simpson', age: 39, occupation: 'Inspector de Seguridad' },
    { type: 'user', name: 'Marge Simpson', age: 36, occupation: 'Ama de Casa' },
    { type: 'user', name: 'Bart Simpson', age: 10, occupation: 'Estudiante' },
    { type: 'user', name: 'Lisa Simpson', age: 8, occupation: 'Estudiante' },
    { type: 'user', name: 'Maggie Simpson', age: 1, occupation: 'Bebé' }
];
var isAdmin = function (person) { return person.type === 'admin'; };
var isUser = function (person) { return person.type === 'user'; };
exports.nameDecorators = [
    str_utils_1.strReverse,
    str_utils_1.strToLower,
    str_utils_1.strToUpper,
    str_utils_1.strRandomize,
    str_utils_1.strInvertCase
];
function logPerson(person) {
    var additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    var randomNameDecorator = exports.nameDecorators[Math.round(Math.random() * (exports.nameDecorators.length - 1))];
    var name = randomNameDecorator(person.name);
    console.log(" - ".concat(name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
[]
    .concat(users, admins)
    .forEach(logPerson);
// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
