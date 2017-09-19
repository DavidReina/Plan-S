export class Plan {
    private nombre: string;
    private descripcion: string;
    private ubicacion: string;
    private fecha: string;
    private costo: string;

    constructor(nombre: string, descripcion: string, ubicacion: string,fecha: string, costo: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
        this.costo = costo;
    }
}
