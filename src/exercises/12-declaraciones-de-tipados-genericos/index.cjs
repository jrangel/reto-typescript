"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageValue = exports.getMedianElement = exports.getMedianIndex = exports.getMinElement = exports.getMinIndex = exports.getMaxElement = exports.getMaxIndex = void 0;
var stats_1 = require("stats");
Object.defineProperty(exports, "getMaxIndex", { enumerable: true, get: function () { return stats_1.getMaxIndex; } });
Object.defineProperty(exports, "getMaxElement", { enumerable: true, get: function () { return stats_1.getMaxElement; } });
Object.defineProperty(exports, "getMinIndex", { enumerable: true, get: function () { return stats_1.getMinIndex; } });
Object.defineProperty(exports, "getMinElement", { enumerable: true, get: function () { return stats_1.getMinElement; } });
Object.defineProperty(exports, "getMedianIndex", { enumerable: true, get: function () { return stats_1.getMedianIndex; } });
Object.defineProperty(exports, "getMedianElement", { enumerable: true, get: function () { return stats_1.getMedianElement; } });
Object.defineProperty(exports, "getAverageValue", { enumerable: true, get: function () { return stats_1.getAverageValue; } });
var admins = [
    { type: 'admin', name: 'Bulma', age: 32, role: 'Administradora' },
    { type: 'admin', name: 'Maestro Roshi', age: 64, role: 'Salvador del mundo' },
    { type: 'admin', name: 'Krillin', age: 40, role: 'Krillin' },
    { type: 'admin', name: 'Yamcha', age: 30, role: 'Supervisor' },
    { type: 'admin', name: 'Chi-Chi', age: 28, role: 'Atención al cliente' },
];
var users = [
    { type: 'user', name: 'Goku', age: 25, occupation: 'Limpiador de chimeneas' },
    { type: 'user', name: 'Vegeta', age: 23, occupation: 'Astronauta' },
    { type: 'user', name: 'Piccolo', age: 70, occupation: 'Guía del desierto' },
    { type: 'user', name: 'Gohan', age: 28, occupation: 'Persona común' },
    { type: 'user', name: 'Trunks', age: 31, occupation: 'Encubierto' }
];
function logUser(user) {
    if (!user) {
        console.log(' - none');
        return;
    }
    var pos = users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    if (!admin) {
        console.log(' - none');
        return;
    }
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var compareUsers = function (a, b) { return a.age - b.age; };
var compareAdmins = function (a, b) { return a.age - b.age; };
var colorizeIndex = function (value) { return String(value + 1); };
console.log('Youngest user:');
logUser((0, stats_1.getMinElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMinIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Median user:');
logUser((0, stats_1.getMedianElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMedianIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Oldest user:');
logUser((0, stats_1.getMaxElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMaxIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Average user age:');
console.log(" - ".concat(String((0, stats_1.getAverageValue)(users, function (_a) {
    var age = _a.age;
    return age;
})), " years"));
console.log();
console.log('Youngest admin:');
logAdmin((0, stats_1.getMinElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMinIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Median admin:');
logAdmin((0, stats_1.getMedianElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMedianIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Oldest admin:');
logAdmin((0, stats_1.getMaxElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMaxIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Average admin age:');
console.log(" - ".concat(String((0, stats_1.getAverageValue)(admins, function (_a) {
    var age = _a.age;
    return age;
})), " years"));
