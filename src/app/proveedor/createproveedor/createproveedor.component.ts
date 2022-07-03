import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/Proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createproveedor',
  templateUrl: './createproveedor.component.html',
  styleUrls: ['./createproveedor.component.scss'],
  providers: [ProveedorService]
})
export class CreateproveedorComponent implements OnInit {

  public title: string;
  public save_proveedor: any;
  public status!: string;

  public proveedor: Proveedor = {
    idproveedor: 0,
    nombresproveedor: '',
    apellidosproveedor: '',
    documento: 0,
    direccion: '',
    correo: '',
    telefono: 0,
    cantvehiculosdisponibles: 0,
    datetimeCreated: ''
  };


  constructor(
    private proveedoresService: ProveedorService
  ) { 
    this.title = 'Crear Proveedor';
  }

  ngOnInit() {
  }

  onSubmit(form: { reset: () => void; }){
    delete this.proveedor.datetimeCreated;
    delete this.proveedor.idproveedor;

    
    this.proveedoresService.saveProveedor(this.proveedor)
        .subscribe(
          res => {
            console.log(res);
            this.save_proveedor = res.proveedor;


            this.status = 'success';
            form.reset();
          },
          err => console.error(err)
        )
    console.log(this.proveedor);
  }

}
