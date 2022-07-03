import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from './global';
import { Proveedor } from '../models/Proveedor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProveedorService {
  public URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = Global.url;
  }

  testService(){
    return 'Testing Angular Service';
  }

  saveProveedor(proveedor: Proveedor): Observable<any>{
    let params = JSON.stringify(proveedor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.URL_API + 'create-proveedor', params, {
      headers: headers,
    });
  }

  getProveedores(filter: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.URL_API + 'proveedores'+ filter , {headers: headers });

  }

  getProveedor(idproveedor: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this.http.get(this.URL_API + 'proveedor/' + idproveedor, { headers: headers });
  }

  deleteProveedor(idproveedor: string): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
  return this.http.delete(this.URL_API + 'proveedor/' + idproveedor, { headers: headers });
 }

  editProveedor(proveedor: any): Observable<any> {
    let params = JSON.stringify(proveedor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.URL_API + 'proveedor/' + proveedor.idproveedor, params, {
    headers: headers,
    });
  }
  
}
