import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './Layout/nav/nav.component';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  {path:'index',component:NavComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:NavComponent, pathMatch:'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
