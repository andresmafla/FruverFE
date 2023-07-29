import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/auth/administrador.service';

@Component({
  selector: 'app-administrador-edit',
  templateUrl: './administrador-edit.component.html',
  styleUrls: ['./administrador-edit.component.css']
})
export class AdministradorEditComponent {
  id_administrador = "";
  administrador: any = {
    nombre: '',
    apellido: '',
    correo_electronico: '',
    contrasena: '',
  };

  constructor(private administradorService:AdministradorService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id_administrador = this.route.snapshot.params['id_administrador'];
    console.log(this.id_administrador);

    if (this.id_administrador) {
      //editar
      this.administradorService.obtenerAdministrador(this.id_administrador).subscribe(data => {
          this.administrador = data[0];
        },
        (error) => {
          console.log("error");
        }
      );
    }else{
      //nuevo producto
      console.log("nuevo administrador");
    }
  }

  onSubmit(){
    console.log("submit realizado");
    if (this.administrador.id_administrador) {
      //viene de editar
      this.administradorService.actualizarAdministrador(this.administrador).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/administradores']);
        }
      );
    }else{
      //viene de crear
      this.administradorService.agregarAdministrador(this.administrador).subscribe(data =>{
        this.router.navigate(['/administradores']);
      });
    }
  }
}
