import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  obtenerAdministradores(){
    return this.http.get<Administrador[]>(`${this.BASE_URL}/administrador`);
  }

  obtenerAdministrador(id_administrador:string){
    return this.http.get<Administrador[]>(`${this.BASE_URL}/administrador/${id_administrador}`);
    
  }

  agregarAdministrador(administrador: Administrador){
    return this.http.post<string>(`${this.BASE_URL}/administrador`,administrador);
  }

  actualizarCliente(administrador: Administrador){
    return this.http.put<string>(`${this.BASE_URL}/administrador/${administrador.id_administrador}`,administrador);
  }

  borrarCliente(id_administrador:string){
    return this.http.delete<string>(`${this.BASE_URL}/administrador/${id_administrador}`);
  }
}
