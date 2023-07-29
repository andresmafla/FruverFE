import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/auth/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent {
  clientes: Observable<Cliente[]> | undefined;

  constructor(private clienteService: ClienteService){ }

  ngOnInit(){
    this.clientes = this.clienteService.obtenerClientes();
  }

  borrarCliente(id_cliente:string){
    this.clienteService.borrarCliente(id_cliente).subscribe(data =>{
      console.log("Registro Eliminado");
      this.ngOnInit();
    });
  }
}
