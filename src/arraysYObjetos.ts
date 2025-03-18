//Ejemplos de arrays y objetos en TypeScript

// Arrays

export const numeros: number[] = [1, 2, 3, 4, 5];
export const nombres: string[] = ['Juan', 'Pedro', "Carlos"];

//Array de multiples tipos de datos (UNION)
export const mixto: (string | number)[] = ['Uno', 2, 'Tres', 4];

//Array multidimensional

export const matriz: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Objetos
export const persona: {nombre: string, edad: number} = {
    nombre: 'Juan',
    edad: 25
}

//Objeto con propiedad  
export const producto: {id: number, nombre: string, precio?: number} = {
    id: 1,
    nombre: 'Labial'
    //precio es opcional asi que no es necesario agregarlo
}

// Objeto con propiedades de solo lectura

export const configuracion: {readonly apiKey: string, timeout: number} = {
    apiKey: 'ABC123',
    timeout: 1000
}

// Objetos como registros indexados
export const puntuaciones: {[jugador: string] : number} = {
    "Juan": 95,
    "Maria" : 85,
    "Pedro" : 90
}

// Objetos con metodos

export const calculadora = {
    sumar: (a: number, b: number): number => a + b,
    restar: (a: number, b: number): number => a - b
};


export function mostrarArrayYObjetos(): string {
    return `
            <div>
                <h3>Arrays y Objetos en Typescript</h3>
                <hr>
                <h4>Array</h4>
                <lu>
                    <li>Numeros: ${numeros.join(', ')}</li>
                    <li>Nombres: ${nombres.join(', ')}</li>
                    <li>Mixto: ${mixto.join(', ')}</li>
                    <li>Matriz: ${matriz.map(row => `[${row.join(', ')}]`).join(', ')}</li>
                </lu>

                <h4>Objeto</h4>
                <ul>
                    <li>Nombre: ${persona.nombre}, ${persona.edad}</li>
                    <li>Producto: ${producto.id} - ${producto.nombre} ${producto.precio ? `Q${producto.precio}` : '(Sin precio)'}</li>
                    <li>Configuracion: API KEY: ${configuracion.apiKey}, Timeout: ${configuracion.timeout}ms</li>
                    <li>Puntuaciones: ${Object.entries(puntuaciones).map(
                        ([jugador, puntos]) => `${jugador}: ${puntos}`)
                        .join(', ')}
                    
                    </li>
                    <li>Calculadora: Suma: ${calculadora.sumar(5,3)}, Resta: ${calculadora.restar(5,3)}</li>

                </ul>


            </div>
        `
}