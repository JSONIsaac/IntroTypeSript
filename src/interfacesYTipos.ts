import { calculadora } from './arraysYObjetos';
// Ejemplos de interfaces y tipos en TypeScript

//Interfaces

export interface Usuario{
    id: number;
    nombre: string;
    email: string;
    fechaRegistro?: Date; // el ? indica que es opcional
}


// Interface con metodos

export interface Verifiacle{
    verificar(): boolean;
}


// Interface que extiende de otra interface

export interface UsuarioVerificado extends Usuario, Verifiacle{
    verificadoEn: Date;
}

//Interface para un objeto indexable

export interface Diccionario {
    [clave: string]: string;
}


export const usuario1: Usuario = {
    id: 1,
    nombre: 'Carlos',
    email: 'carlos@mail.com'
}

export const usuario2 : UsuarioVerificado = {
    id: 2,
    nombre: 'Juan',
    email: 'juan@mail.com',
    verificadoEn: new Date(),
    verificar(){
        return true;
    }
}

export const diccionario: Diccionario = {
    "clave1": "valor1",
    "clave2": "valor2"
}

export interface Calculadora {
    (a: number, b: number): number;
}



export const suma: Calculadora = (a, b) => a + b;
export const resta: Calculadora = (a, b) => a - b;
export const multiplicacion: Calculadora = (a, b) => a * b;
export const division: Calculadora = (a, b) => a / b;


// Types ALIASES
export type Coordenadas = {
    x: number;
    y: number;
    z?: number; // el ? indica que es opcional para 3D
}

export type ID = string | number; // Union Type (Union De tipos)

export type Resutlado<T> = {
    datos: T;
    error: string | null;
}

export type Operacion = 'suma' | 'resta' | 'multiplicacion' | 'division';

// Uso de los tipos
export const punto2D: Coordenadas = {x: 10, y: 20};
export const punto3D: Coordenadas = {x: 10, y: 20, z: 30};

export const miId : ID = 123; // VALIDO
export const otroId : ID = 'abc'; // VALIDO

export const resultadoNumero: Resutlado<number> = {
    datos: 42,
    error: null
}

export const resultadoTexto: Resutlado<string> = {
    datos: 'Hola Mundo',
    error: null
}

export const operacionSeleccionada: Operacion = 'division'; // VALIDO


export function mostrarInterfacesYTipos(){
    return `
        <div>
            <h3>Interfaces y Types en Typescript</h3>
            <hr>

            <h4>Interfaces</h4>
            <ul>
                <li>Usuario: ${usuario1.nombre} (${usuario1.email})</li>
                <li>Usuario Verificado: ${usuario2.nombre}, verificado: ${usuario2.verificar() ? 'SI' : 'NO'}</li>
                <li>Diccionario: ${Object.entries(diccionario).map((k, v) => `${k}=${v}`).join(', ')}</li>
                <li>Calculadora (SUMA): 5 + 3 = ${suma(5, 3)}</li>
                <li>Calculadora (RESTA): 5 - 3 = ${resta(5, 3)}</li>
                <li>Calculadora (MULTIPLICACION): 5 * 3 = ${multiplicacion(5, 3)}</li>
                <li>Calculadora (DIVISION): 2 / 2 = ${division(2, 2)}</li>
            </ul>

            <h4>Type Aliase</h4>
            <ul>
                <li>
                    Punto 2D: ${punto2D.x}, ${punto2D.y}
                </li>
                <li>
                    Punto 3D: ${punto3D.x}, ${punto3D.y}, ${punto3D.z}
                </li>
                <li>
                    ID (numero): ${miId}
                </li>
                <li>
                    ID (texto): ${otroId}
                </li>
                <li>
                    Operacion (SUMA): ${operacionSeleccionada}
                </li>
            </ul>
        </div>
    `
}