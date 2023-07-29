import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './funcionesAdmin/product-list/product-list.component';
import { ProductEditComponent } from './funcionesAdmin/product-edit/product-edit.component';
import { ClienteListComponent } from './funcionesAdmin/cliente-list/cliente-list.component';
import { ClienteEditComponent } from './funcionesAdmin/cliente-edit/cliente-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
  {path:'admin', component:DashboardComponent},

  //rutas para el manejo de productos
  {path:'productos', component:ProductListComponent},
  {path:'productos/editar/:id_producto', component:ProductEditComponent},
  {path:'productos/agregar', component:ProductEditComponent},

  //rutas para el manejo de clientes
  {path:'clientes', component:ClienteListComponent},
  {path:'clientes/editar/:id_cliente', component:ClienteEditComponent},
  {path:'clientes/agregar', component:ClienteEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
