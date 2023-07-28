import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  baseUrl: string = 'http://localhost:3000/';

  //lista carrito
  private myList: Producto[] = [];

  //carrito observable
  private myCart = new BehaviorSubject<Producto[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Producto[]> {
    const response = this.httpClient.get<Producto[]>(`${this.baseUrl}productos`);
    // console.log(response);
    return response
  }

  addProduct(product: Producto) {

    // debugger;
    if (this.myList.length === 0) {
      product.cantidad = 1;
      this.myList.push(product);
      //emito la lista para los que estén escuchando
      this.myCart.next(this.myList);

    } else {
      const productMod = this.myList.find((element) => {
        return element.id_producto === product.id_producto
      })
      if (productMod) {
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        product.cantidad = 1;
        this.myList.push(product);
        //ojo hay que emitir la lista!!
        this.myCart.next(this.myList);
      }

    }
  }

  findProductById(id: string) {
    return this.myList.find((element) => {
      return element.id_producto === id
    })

  }

  deleteProduct(id: string) {

    this.myList = this.myList.filter((product) => {
      return product.id_producto != id
    })
    this.myCart.next(this.myList);


  }
  totalCart() {
    const total = this.myList.reduce(function (acc, product) { return acc + (product.cantidad * product.precio); }, 0)
    return total
  }
}
