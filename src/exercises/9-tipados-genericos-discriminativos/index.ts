interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: 'admin', name: 'Fiona', age: 32, role: 'Princesa' },
  { type: 'admin', name: 'Shrek', age: 64, role: 'Ogro del pantano' },
];

const users: User[] = [
  { type: 'user', name: 'Burro', age: 25, occupation: 'Burro' },
  { type: 'user', name: 'Gato', age: 23, occupation: 'Gato' },
];

//
export type ApiResponse<T> = 
    | { status: 'error'; error: string }
    | { status: 'success'; data: T };

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
export function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
    callback({
        status: 'success',
        data: admins
    });
}

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
export function requestUsers(callback: (response: ApiResponse<User[]>) => void) {
    callback({
        status: 'success',
        data: users
    });
}

// Se cambia por ApiResponse para que reciba un número
export function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
    callback({
        status: 'success',
        data: Date.now()
    });
}

export function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
    callback({
        status: 'error',
        error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
    });
}

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

function startTheApp(callback: (error: Error | null) => void) {
    requestAdmins((adminsResponse) => {
        console.log('Admins:');
        if (adminsResponse.status === 'success') {
            adminsResponse.data.forEach(logPerson);
        } else {
            return callback(new Error(adminsResponse.error));
        }

        console.log();

        requestUsers((usersResponse) => {
            console.log('Users:');
            if (usersResponse.status === 'success') {
                usersResponse.data.forEach(logPerson);
            } else {
                return callback(new Error(usersResponse.error));
            }

            console.log();

            requestCurrentServerTime((serverTimeResponse) => {
                console.log('Server time:');
                if (serverTimeResponse.status === 'success') {
                    console.log(`   ${new Date(serverTimeResponse.data).toLocaleString()}`);
                } else {
                    return callback(new Error(serverTimeResponse.error));
                }

                console.log();

                requestCoffeeMachineQueueLength((coffeeMachineQueueLengthResponse) => {
                    console.log('Coffee machine queue length:');
                    if (coffeeMachineQueueLengthResponse.status === 'success') {
                        console.log(`   ${coffeeMachineQueueLengthResponse.data}`);
                    } else {
                        return callback(new Error(coffeeMachineQueueLengthResponse.error));
                    }

                    callback(null);
                });
            });
        });
    });
}

startTheApp((e: Error | null) => {
    console.log();
    if (e) {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`)
    } else {
        console.log('Success!');
    }
});