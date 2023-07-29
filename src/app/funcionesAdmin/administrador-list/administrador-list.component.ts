import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/auth/administrador.service';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent {
  administradores: Observable<Administrador[]> | undefined;

  constructor(private administradorService: AdministradorService){ }

  ngOnInit(){
    this.administradores = this.administradorService.obtenerAdministradores();
  }

  borrarAdministrador(id_administrador:string){
    this.administradorService.borrarAdministrador(id_administrador).subscribe(data =>{
      console.log("Registro Eliminado");
      this.ngOnInit();
    });
  }
}
