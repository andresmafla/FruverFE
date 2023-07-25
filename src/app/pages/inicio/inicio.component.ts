import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/auth/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  productos!: Producto[];

  constructor(private productosServices:ProductoService){

  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productosServices.obtenerProductos()
      .subscribe(
        (productos: Producto[]) => { // Asegúrate de que el parámetro de la función coincida con el tipo de dato que devuelve el servicio.
          this.productos = productos;
        },
        (error) => {
          console.error('Error al obtener los productos:', error);
        }
      );
  }
}
