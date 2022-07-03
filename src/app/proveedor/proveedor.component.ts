import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';
import { Global } from '../services/global';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss'],
  providers: [ProveedorService],
})
export class ProveedorComponent implements OnInit {

  allProveedores: any = [];
  proveedores: any = [];
  search = ' ';
  

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
    /*
    this.proveedorService.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      }
      ,
      err => console.log(err)
    )
    */

    this.loadProveedor();
  }

  loadProveedor(){
    
    const filter = (typeof this.search == 'string' && this.search.length > 0) ? `?searchBy=${this.search}` :  ' ';

    console.log(filter);
    
    this.proveedorService.getProveedores(filter).subscribe(
      (res)=>{
        this.allProveedores = res;
      },
      (error) => {
        console.log('Error', error);
      }
    )

  }


}
