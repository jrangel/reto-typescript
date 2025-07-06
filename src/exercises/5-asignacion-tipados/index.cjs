"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUsers = exports.logPerson = exports.isUser = exports.isAdmin = exports.persons = void 0;
exports.persons = [
    {
        type: 'user',
        name: 'Alvaro Castillo',
        age: 25,
        occupation: 'Ingeniero de Software',
    },
    {
        type: 'admin',
        name: 'Javier Castillo',
        age: 32,
        role: 'Estudiante',
    },
    {
        type: 'user',
        name: 'Maria Isabel Hernandez',
        age: 23,
        occupation: 'Abogada',
    },
    {
        type: 'admin',
        name: 'Jorge Perez',
        age: 64,
        role: 'Contador',
    },
    {
        type: 'user',
        name: 'Carla Perez',
        age: 23,
        occupation: 'Contadora',
    },
    {
        type: 'admin',
        name: 'Andres Perez',
        age: 23,
        role: 'Administrator',
    },
];
var isAdmin = function (person) {
    return person.type === 'admin';
};
exports.isAdmin = isAdmin;
var isUser = function (person) {
    return person.type === 'user';
};
exports.isUser = isUser;
function logPerson(person) {
    var additionalInformation = '';
    if ((0, exports.isAdmin)(person)) {
        additionalInformation = person.role;
    }
    if ((0, exports.isUser)(person)) {
        additionalInformation = person.occupation;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
exports.logPerson = logPerson;
// export function filterUsers(persons: Person[], criteria: User): User[] {
//   return persons.filter(isUser).filter(user => {
//     const criteriaKeys = Object.keys(criteria) as (keyof User)[];
//     return criteriaKeys.every(fieldName => {
//       return user[fieldName] === criteria[fieldName];
//     });
//   });
// }
function filterUsers(persons, criteria) {
    // Filtramos el arreglo de personas para obtener solo aquellas que son usuarios
    return persons.filter(exports.isUser).filter(function (user) {
        // Verificamos si cada clave del criterio coincide con el usuario
        return Object.entries(criteria).every(function (_a) {
            var key = _a[0], value = _a[1];
            return user[key] === value;
        });
    });
}
exports.filterUsers = filterUsers;
console.log('Users of age 23:');
filterUsers(exports.persons, {
    age: 23,
}).forEach(logPerson);
