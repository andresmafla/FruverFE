import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  obtenerClientes(){
    return this.http.get<Cliente[]>(`${this.BASE_URL}/clientes`);
  }

  obtenerCliente(id_cliente:string){
    return this.http.get<Cliente[]>(`${this.BASE_URL}/clientes/${id_cliente}`);
    
  }

  agregarClientes(cliente: Cliente){
    return this.http.post<string>(`${this.BASE_URL}/clientes`,cliente);
  }

  actualizarCliente(cliente: Cliente){
    return this.http.put<string>(`${this.BASE_URL}/clientes/${cliente.id_cliente}`,cliente);
  }

  borrarCliente(id_cliente:string){
    return this.http.delete<string>(`${this.BASE_URL}/clientes/${id_cliente}`);
  }
}

