import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { BooklistComponent } from './booklist/booklist.component'
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:"",component:BooklistComponent},
  {path:"login",component:EmployeeComponent},
  {path:"add",component:NewComponent},
  {path:"edit/:id",component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
