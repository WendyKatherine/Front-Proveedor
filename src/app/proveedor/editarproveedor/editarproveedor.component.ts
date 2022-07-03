import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/Proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { Global } from '../../services/global'; 
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-editarproveedor',
  templateUrl: '../createProveedor/createProveedor.component.html',
  styleUrls: ['./editarproveedor.component.scss'],
  providers: [ProveedorService]
})
export class EditarproveedorComponent implements OnInit {

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
    private proveedorService: ProveedorService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.title = "Editar Proveedor";
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      let idproveedor = params['idproveedor'];
      //console.log(idproveedor);

      this.getProveedor(idproveedor);
    });
  }

  getProveedor(idproveedor: any){
    this.proveedorService.getProveedor(idproveedor).subscribe(
      (res) => {
        
        this.proveedor = res;
        console.log(res);
      },
      (err) => {
        console.log(<any>err);
      }
    );
  }

  onSubmit(form: { reset: () => void; }){
    
    this.proveedorService.editProveedor(this.proveedor)
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
