import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/auth/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent {
  id_cliente = "";
  cliente: any = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
  };

  constructor(private clienteService:ClienteService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id_cliente = this.route.snapshot.params['id_cliente'];
    console.log(this.id_cliente);

    if (this.id_cliente) {
      //editar
      this.clienteService.obtenerCliente(this.id_cliente).subscribe(data => {
          this.cliente = data[0];
        },
        (error) => {
          console.log("error");
        }
      );
    }else{
      //nuevo producto
      console.log("nuevo cliente");
    }
  }

  onSubmit(){
    console.log("submit realizado");
    if (this.cliente.id_cliente) {
      //viene de editar
      this.clienteService.actualizarCliente(this.cliente).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/clientes']);
        }
      );
    }else{
      //viene de crear
      this.clienteService.agregarClientes(this.cliente).subscribe(data =>{
        this.router.navigate(['/clientes']);
      });
    }
  }
}
