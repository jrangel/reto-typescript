"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCoffeeMachineQueueLength = exports.requestCurrentServerTime = exports.requestUsers = exports.requestAdmins = void 0;
var admins = [
    { type: 'admin', name: 'Fiona', age: 32, role: 'Princesa' },
    { type: 'admin', name: 'Shrek', age: 64, role: 'Ogro del pantano' },
];
var users = [
    { type: 'user', name: 'Burro', age: 25, occupation: 'Burro' },
    { type: 'user', name: 'Gato', age: 23, occupation: 'Gato' },
];
// type AdminsApiResponse = (
//     {
//         status: 'success';
//         data: Admin[];
//     } |
//     {
//         status: 'error';
//         error: string;
//     }
// );
// Se cambia por ApiResponse para que reciba un arreglo de Admins
function requestAdmins(callback) {
    callback({
        status: 'success',
        data: admins
    });
}
exports.requestAdmins = requestAdmins;
// type UsersApiResponse = (
//     {
//         status: 'success';
//         data: User[];
//     } |
//     {
//         status: 'error';
//         error: string;
//     }
// );
// Se cambia por ApiResponse para que reciba un arreglo de Users
function requestUsers(callback) {
    callback({
        status: 'success',
        data: users
    });
}
exports.requestUsers = requestUsers;
// Se cambia por ApiResponse para que reciba un número
function requestCurrentServerTime(callback) {
    callback({
        status: 'success',
        data: Date.now()
    });
}
exports.requestCurrentServerTime = requestCurrentServerTime;
function requestCoffeeMachineQueueLength(callback) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}
exports.requestCoffeeMachineQueueLength = requestCoffeeMachineQueueLength;
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function startTheApp(callback) {
    requestAdmins(function (adminsResponse) {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        }
        else {
            return callback(new Error(adminsResponse.error));
        }
        console.log();
        requestUsers(function (usersResponse) {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            }
            else {
                return callback(new Error(usersResponse.error));
            }
            console.log();
            requestCurrentServerTime(function (serverTimeResponse) {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log("   ".concat(new Date(serverTimeResponse.data).toLocaleString()));
                }
                else {
                    return callback(new Error(serverTimeResponse.error));
                }
                console.log();
                requestCoffeeMachineQueueLength(function (coffeeMachineQueueLengthResponse) {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log("   ".concat(coffeeMachineQueueLengthResponse.data));
                    }
                    else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }
                    callback(null);
                });
            });
        });
    });
}
startTheApp(function (e) {
    console.log();
    if (e) {
        console.log("Error: \"".concat(e.message, "\", but it's fine, sometimes errors are inevitable."));
    }
    else {
        console.log('Success!');
    }
});
