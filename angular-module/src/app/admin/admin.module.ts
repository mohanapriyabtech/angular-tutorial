import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class AdminModule { }
