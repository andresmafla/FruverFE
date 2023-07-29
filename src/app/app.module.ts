import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './funcionesAdmin/product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';
import { ProductEditComponent } from './funcionesAdmin/product-edit/product-edit.component';
import { ClienteListComponent } from './funcionesAdmin/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './funcionesAdmin/cliente-edit/cliente-edit.component';
import { AdministradorEditComponent } from './funcionesAdmin/administrador-edit/administrador-edit.component';
import { AdministradorListComponent } from './funcionesAdmin/administrador-list/administrador-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    CartComponent,
    ProductosComponent,
    DashboardComponent,
    ProductListComponent,
    MenuComponent,
    ProductEditComponent,
    ClienteListComponent,
    ClienteEditComponent,
    AdministradorEditComponent,
    AdministradorListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
