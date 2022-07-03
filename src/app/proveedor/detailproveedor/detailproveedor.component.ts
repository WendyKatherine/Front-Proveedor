import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/Proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { Global } from '../../services/global'; 
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detailproveedor',
  templateUrl: './detailproveedor.component.html',
  styleUrls: ['./detailproveedor.component.scss'],
  providers: [ProveedorService]
})
export class DetailproveedorComponent implements OnInit {

  public proveedor!: Proveedor;
  public confirm: boolean;

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.confirm = false;
  }

  ngOnInit() {
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

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }

  deleteProveedor(idproveedor: any){
  this.proveedorService.deleteProveedor(idproveedor).subscribe(
   res => {        
    console.log(res);
    this.router.navigate(['/proveedores']);
  },
   err => {
     console.log(<any>err);
   }
  );
  }

}
