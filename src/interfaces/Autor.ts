export interface Autor {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento?: Date;
    obtenerNombreCompleto(): string;
}