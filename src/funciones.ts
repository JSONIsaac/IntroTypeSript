// Funciones en typescript

import { multiplicacion, suma, Operacion } from './interfacesYTipos';


export function sumar(a: number, b: number): number {
    return a + b;
}

// Funcion con parametros opcionales
export function saludar (nombre: string, titulo?: string) : string{
    if(titulo){
        return `Hola ${titulo} ${nombre}`;
    }
    return `Hola ${nombre}`;
}

//Funcion con parametros por defecto

export function crearMenaje(texto: string, prioridad: string = "normal"): string{
    return `[${prioridad.toUpperCase()}] ${texto}`;
}

// Funcion con rest parameters
export function sumarTodos(...numeros: number[]): number{
    return numeros.reduce((a, b) => a + b, 0);
}

// Arrow function tipados

export const multiplicar = (a: number, b: number): number => a * b;

// Tipo de funcion
export type OperacionMatematica = (x: number, y: number) => number;

export const dividir : OperacionMatematica = (a, b) => {
    if (b=== 0) throw new Error("No se puede dividir por cero");
    return a / b;
}

// Funcion que recibe una funcion como parametro
export function calcular(a: number, b: number, Operacion: OperacionMatematica): number{
    return Operacion(a, b);
}

// funcion devuelve una funcion(closure)

export function crearMultiplicador(factor: number): (valor: number) => number{
    return (valor: number) => valor * factor;
}

// SobreCarga de funciones

export function procesar(valor: string): string;
export function procesar(valor: number): number;
export function procesar(valor: string | number): string | number{
    if(typeof valor === "string"){
        return valor.toUpperCase();
    }else{
        return valor * 2;
    }
}


export function mostrarFunciones(): string{
    const duplicar = crearMultiplicador(2);
    const triplicador = crearMultiplicador(3);

    return `
        <div>
            <h3>Funciones en TypeScript</h3>
            <hr>

            <h4>Funciones basicas con TypeScript</h4>
            <ul>
                <li>SUMAR 5 + 3 = ${sumar(5, 3)}</li>
                <li>Saludar Sin titulo: ${saludar("Maria")}</li>
                <li>Saludar Con titulo: ${saludar("Maria", "Ing.")}</li>
                <li>Crear mensaje: ${crearMenaje("Este es un mensaje")}</li>
                <li>Crear mensaje con prioridad: ${crearMenaje("Este es un mensaje con prioridad", "urgente")}</li>
                <li>Suma de varios numeros : 1+2+3+4+5 = ${sumarTodos(1,2,3,4,5,6)}</li>
            </ul>

            <h4>Funciones Avanzadas</h4>
            <ul>
                <li>Arrow Function 4 x 6 = ${multiplicar(4,6)}</li>
                <li>Dividir 10 / 2 = ${dividir(10, 2)}</li>
                <li>Calcular con funcion como parametro: ${calcular(8, 2, dividir)}</li>
                <li>Funcion que devuleve funcion (duplicar): ${duplicar(7)}</li>
                <li>Funcion que devuleve funcion (triplicar): ${triplicador(7)}</li>
            </ul>

            <h4>SobreCarga de funciones</h4>
            <ul>
                <li>Procesar STRING = ${procesar("hola MUNDO")}</li>
                <li>procesar NUMERO = ${procesar(42)}</li>
        </div>
    `

}