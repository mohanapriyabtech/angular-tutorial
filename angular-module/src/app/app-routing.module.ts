import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { LoginSubadminComponent } from './subadmin/login-subadmin/login-subadmin.component';


const routes: Routes = [
  { path: 'login', 
loadChildren:() => import('./admin/admin.module').then(m=> m.AdminModule) },
  { path: 'subadminlogin', component: LoginSubadminComponent},
  { path : '', component: LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
