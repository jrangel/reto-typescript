
// Anotaciones de tipo faltantes

import { T } from "vitest/dist/chunks/environment.d.cL3nLXbE.js";



export class ObjectManipulator<T extends Record<string, any>> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T & Record<K, V>> {
        return new ObjectManipulator({...this.obj, [key]: value} as T & Record<K, V>);
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject():T {
        return this.obj;
    }
}
