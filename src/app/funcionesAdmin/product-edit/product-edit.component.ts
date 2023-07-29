import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/auth/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  id_producto = "";
  producto: any = {
    nombre: '',
    precio: 0,
    cantidad_disponible: 0
  };

  constructor(private productoService:ProductoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id_producto = this.route.snapshot.params['id_producto'];
    console.log(this.id_producto);

    if (this.id_producto) {
      //editar
      this.productoService.obtenerProducto(this.id_producto).subscribe(data => {
          this.producto = data[0];
        },
        (error) => {
          console.log("error");
        }
      );
    }else{
      //nuevo producto
      console.log("nuevo producto");
    }
  }

  onSubmit(){
    console.log("submit realizado");
    if (this.producto.id_producto) {
      //viene de editar
      this.productoService.actualizarProducto(this.producto).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/productos']);
        }
      );
    }else{
      //viene de crear
      this.productoService.agregarProducto(this.producto).subscribe(data =>{
        this.router.navigate(['/productos']);
      });
    }
  }
}
