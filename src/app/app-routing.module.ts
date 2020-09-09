import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooklistComponent } from './booklist/booklist.component'
import { NewComponent } from './add-new-book/new.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:"",component:BooklistComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"add",component:NewComponent,canActivate:[AuthGuard]},
  {path:"edit/:id",component:EditComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
