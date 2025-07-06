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
    { type: 'admin', name: 'Rick Sanchez', age: 70, role: 'Científico' },
    { type: 'admin', name: 'Hombre Pajaro', age: 35, role: 'Líder Rebelde' }
];

const users: User[] = [
    { type: 'user', name: 'Morty Smith', age: 14, occupation: 'Estudiante' },
    { type: 'user', name: 'Summer Smith', age: 17, occupation: 'Estudiante' }
];

export type ApiResponse<T> = (
    {
        status: 'success';
        data: T;
    } |
    {
        status: 'error';
        error: string;
    }
);

// export function promisify(arg: unknown): unknown {
//     return null;
// }
// Se convierte en una funcion generica, 
// que recibe una funcion que acepta un callback y 
// devuelve una funcion que devuelve una promesa.
export function promisify<T>(fn: (callback: (response: ApiResponse<T>) => void) => void): () => Promise<T> {
    return () => new Promise<T>((resolve, reject) => {
        fn((response) => {
            if (response.status === 'error') {
                reject(new Error(response.error));
            } else {
                resolve(response.data);
            }
        });
    });
}

// Promisified recibe un generico T y transforma sus propiedades
// en funciones que retornan promesas,
// donde cada propiedad es una funcion que acepta un callback
// y retorna una promesa 
type Promisified<T> = {
    [X in keyof T]: T[X] extends (cb: (res: ApiResponse<infer Y>) => void) => void ? () => Promise<Y> : never;
};

// La funcion promisifyAll recibe un objeto con funciones que aceptan callbacks
// y retorna un objeto con las mismas propiedades, 
// pero cada una es una funcion que retorna una promesa.
export function promisifyAll<T extends Record<string, Function>>(obj: T): Promisified<T> {
    const result = {} as Promisified<T>;
    // Se itera sobre las propiedades del objeto original
    // y se convierten en funciones que retornan promesas.
    for (const key in obj) {
        result[key] = promisify(obj[key] as any) as any;
    }
    return result;
}

const oldApi = {
    requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
        callback({
            status: 'success',
            data: admins
        });
    },
    requestUsers(callback: (response: ApiResponse<User[]>) => void) {
        callback({
            status: 'success',
            data: users
        });
    },
    requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'success',
            data: Date.now()
        });
    },
    requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
        callback({
            status: 'error',
            error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
        });
    }
};

// export const api = {
//     requestAdmins: promisify(oldApi.requestAdmins),
//     requestUsers: promisify(oldApi.requestUsers),
//     requestCurrentServerTime: promisify(oldApi.requestCurrentServerTime),
//     requestCoffeeMachineQueueLength: promisify(oldApi.requestCoffeeMachineQueueLength)
// };

export const api = promisifyAll(oldApi);

function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}

async function startTheApp() {
    console.log('Admins:');
    (await api.requestAdmins()).forEach(logPerson);
    console.log();

    console.log('Users:');
    (await api.requestUsers()).forEach(logPerson);
    console.log();

    console.log('Server time:');
    console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
    console.log();

    console.log('Coffee machine queue length:');
    console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
    () => {
        console.log('Success!');
    },
    (e: Error) => {
        console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
    }
);

