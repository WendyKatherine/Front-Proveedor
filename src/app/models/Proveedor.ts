export class Proveedor{

    constructor(
        public idproveedor?: number,
        public nombresproveedor?: string,
        public apellidosproveedor?: string,
        public documento?: number,
        public direccion?: string,
        public correo?: string,
        public telefono?: number,
        public cantvehiculosdisponibles?: number,
        public datetimeCreated?: string
    ) {}
    
}