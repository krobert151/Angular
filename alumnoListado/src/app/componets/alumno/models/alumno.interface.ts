export enum Sex {
    masculino,
    femenino
}

export interface AlumnoRepsonse {
    count: number;
    next: string;
    previous: null;
    results: Alumno[];
}
export interface Alumno {

    nombre: string;
    apellidos: string;
    idAlumno: number;
    edad: number;
    sexo: Sex;
    modulos: Modulos[];
    paid: boolean;
}

export interface Modulos {
    nombre: string;
    horas: number;
}