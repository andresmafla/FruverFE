import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/auth/carrito.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  userLoginOn:boolean=false;
  correo?:'';
  viewCart: boolean = false;
  myCart$ = this.carritoService.myCart$;

  constructor(private loginService: LoginService, private carritoService:CarritoService){}
  getCorreo():string{
    return this.loginService.getCorreo()?? '';
  }

  onToggleCart() {
    this.viewCart = !this.viewCart
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn)=>{
        this.userLoginOn=userLoginOn;
      }
    })

  }
}
