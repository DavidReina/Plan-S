export class Plan {

    private idPlan:number;
    private nombre: string;
    private descripcion: string;
    private ubicacion: string;
    private fechaInicio: any;
    private fechaFinal: any;
    private costoPromedio: number;
    private creadorPlan: number;
    private detallePreferencia: number;
    private imagenPlan: any;

    constructor(idPlan: number, nombre: string, descripcion: string, ubicacion: string, fechaInicio: any, fechaFinal: any, costoPromedio: number, creadorPlan: number, detallePreferencia: number, imagenPlan: any) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.idPlan = idPlan;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.costoPromedio = costoPromedio;
        this.creadorPlan = creadorPlan;
        this.detallePreferencia = detallePreferencia;
        this.imagenPlan = imagenPlan;

    }
}
