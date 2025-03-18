export interface ElemntoBiblioteca {
    id: number;
    titulo: string;
    fechaCreacion: Date;
    prestar(): void;
    devolver(): void;
    obtenerInformacion(): string;
}