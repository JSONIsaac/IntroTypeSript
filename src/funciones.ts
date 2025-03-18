// Funciones en typescript

import { suma } from "./interfacesYTipos";


export function sumar(a: number, b: number): number {
    return a + b;
}

// Funcion con parametros opcionales




export function mostrarFunciones(): string{


    return `
        <div>
            <h3>Funciones en TypeScript</h3>
            <hr>

            <h4>Funciones basicas con TypeScript</h4>
            <ul>
                <li>SUMAR 5 + 3 = ${sumar(5, 3)}</li>
            </ul>
        </div>
    `

}