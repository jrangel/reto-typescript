"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function logUser(user) {
    var pos = users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var admins = [
    {
        type: 'admin',
        name: 'Gustavo Cerati',
        age: 30,
        role: 'Supervisor',
    },
    {
        type: 'admin',
        name: 'Charly Garcia',
        age: 40,
        role: 'Charly Garcia',
    },
];
var users = [
    {
        type: 'user',
        name: 'Fito Paez',
        age: 70,
        occupation: 'Guia del desierto',
    },
    {
        type: 'user',
        name: 'Luis Spinetta',
        age: 28,
        occupation: 'Persona Ordinaria',
    },
];
// <T,U> T es cualquier tipo como primer argumento y U es cualquier tipo como segundo argumento
// :[U, T] para indicar que la función swap devuelve una tupla con el segundo tipo primero y el primer tipo segundo
function swap(v1, v2) {
    return [v2, v1];
}
exports.swap = swap;
function test1() {
    console.log('test1:');
    var _a = swap(admins[0], users[1]), secondUser = _a[0], firstAdmin = _a[1];
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log('test2:');
    var _a = swap(users[0], admins[1]), secondAdmin = _a[0], firstUser = _a[1];
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log('test3:');
    var _a = swap(users[0], users[1]), secondUser = _a[0], firstUser = _a[1];
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log('test4:');
    var _a = swap(admins[1], admins[0]), firstAdmin = _a[0], secondAdmin = _a[1];
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log('test5:');
    var _a = swap(123, 'Hello World'), stringValue = _a[0], numericValue = _a[1];
    console.log(" - String: ".concat(stringValue));
    console.log(" - Numeric: ".concat(numericValue));
}
[test1, test2, test3, test4, test5].forEach(function (test) { return test(); });
