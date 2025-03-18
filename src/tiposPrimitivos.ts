// declaraciones con tipo explicito
export const nombre: string = 'Juan';
export const edad: number = 25;
export const casado: boolean = true;

// Typescript infiere en el tipo de dato(no es necesario declarar el tipo de dato)
export const apellido = 'Perez';

//Tipo de datos especiales
export const nulo: null = null;
export const indefinido: undefined = undefined;

//tipo any (EVITAR SU USO CUANDO SEA POSIBLE)
export let cualquierCosa: any = "Puede ser cualquier cosa";
cualquierCosa = 25;
cualquierCosa = true;

// tipo dato unknown (EVITAR SU USO CUANDO SEA POSIBLE) pero es mas seguro que any

export let desconocido: unknown = 23;
if (typeof desconocido === 'number') {
    desconocido.toFixed(2);
}

// Litarales de tipo
export type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';
export const miDireccion : Direccion = 'Norte';
//const direccionInvalida: Direccion = 'CualquierOtra'; //Error



export function mostrarTiposPrimitivos(): string {
    return `
        <div>
            <h3>Tipos Primitivos en Typescript</h3>
            <ul>
                <li>String: ${nombre} ${apellido}</li>
                <li>Number: ${edad}</li>
                <li>Boolean: ${casado}</li>
                <li>Null: ${nulo === null ? 'Es null' : nulo}</li>
                <li>Undefined: ${indefinido === undefined ? 'Es undefined' : indefinido}</li>
                <li>Any: ${cualquierCosa}</li>
                <li>Unknown: ${typeof desconocido === 'number' ? desconocido: 'Tipo desconocido'}</li>
                <li>Literal: ${miDireccion}</li>
        </div>
    `
}