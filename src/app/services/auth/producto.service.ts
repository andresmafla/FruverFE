import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  obtenerProductos(){
    return this.http.get<Producto[]>(`${this.BASE_URL}/productos`);
  }

  obtenerProducto(id_producto:string){
    return this.http.get<Producto[]>(`${this.BASE_URL}/productos/${id_producto}`);
    
  }

  agregarProducto(producto: Producto){
    return this.http.post<string>(`${this.BASE_URL}/productos`,producto);
  }

  actualizarProducto(producto: Producto){
    return this.http.put<string>(`${this.BASE_URL}/productos/${producto.id_producto}`,producto);
  }

  borrarProducto(id_producto:string){
    return this.http.delete<string>(`${this.BASE_URL}/productos/${id_producto}`);
  }
}
