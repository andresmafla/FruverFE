import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/auth/producto.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productos: Observable<Producto[]> | undefined;

  constructor(private productoService: ProductoService){ }

  ngOnInit(){
    this.productos = this.productoService.obtenerProductos();
  }

  borrarProducto(id_producto:string){
    this.productoService.borrarProducto(id_producto).subscribe(data =>{
      console.log("Registro Eliminado");
      this.ngOnInit();
    });
  }
}
