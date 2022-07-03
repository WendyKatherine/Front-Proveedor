import { Routes } from "@angular/router";

import { ProveedorComponent } from "../proveedor/proveedor.component";
import { CreateproveedorComponent } from "../proveedor/createproveedor/createproveedor.component";
import { DetailproveedorComponent } from "../proveedor/detailproveedor/detailproveedor.component";
import { EditarproveedorComponent } from "../proveedor/editarproveedor/editarproveedor.component";

export const AdminLayoutComponent: Routes = [
    
    { path: '', component: ProveedorComponent },
    { path: 'proveedores', component: ProveedorComponent },
    { path: 'create-proveedor', component: CreateproveedorComponent },
    { path: 'proveedor/:idproveedor', component: DetailproveedorComponent },
    { path: 'editproveedor/:idproveedor', component: EditarproveedorComponent }

];