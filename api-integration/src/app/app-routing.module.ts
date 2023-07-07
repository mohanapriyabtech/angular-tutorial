import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ServiceComponent } from './service/service.component';
import { CreateComponent } from './create/create.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "contact", component: ContactComponent },
{
  path: "student", component: StudentComponent,
  
  children: [{
    path: "", component: ServiceComponent
  },
  { path: "create", component: CreateComponent },
  { path: "Edit/:id", component: CreateComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
