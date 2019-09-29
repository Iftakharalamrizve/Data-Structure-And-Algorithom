import { AuthGuard } from './Guards/auth.guard';
import { GuestGuard } from './Guards/guest.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegistationComponent } from './registation/registation.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate : [GuestGuard]
  },
  {
    path:'registation',
    component:RegistationComponent,
    canActivate : [GuestGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
