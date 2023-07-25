import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'admin', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'inicio', component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
