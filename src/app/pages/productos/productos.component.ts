import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/auth/carrito.service';
import { Producto } from 'src/app/models/producto.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products: Producto[] = [];
  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getProducts();
  };

  getProducts() {
    this.carritoService.getAllProducts().subscribe((data) => {
      return this.products = data;

    })
  }
  addToCart(product: Producto) {

    this.carritoService.addProduct(product)
  }
}
