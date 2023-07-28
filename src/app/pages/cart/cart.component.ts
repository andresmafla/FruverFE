import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/auth/carrito.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  myCart$ = this.carritoService.myCart$;

  viewCart: boolean = false;

  constructor(private carritoService: CarritoService) { }

  updateUnits(operation: string, id: string) {

    const product = this.carritoService.findProductById(id)
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add') {
        product.cantidad = product.cantidad + 1;

      }
      if (product.cantidad === 0) {
        this.deleteProduct(id)
      }
    }

  }
  totalProduct(price: number, units: number) {
    return price * units
  }
  deleteProduct(id: string) {
    this.carritoService.deleteProduct(id);

  }
  totalCart() {
    const result = this.carritoService.totalCart();
    return result;
  }

}
