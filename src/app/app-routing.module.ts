import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgetPaswordComponent } from './component/forget-passwored/forget-passwored.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPaswordComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'createnote',
      pathMatch: 'full',
    },
    {
      path: "createnote",
      component: CreateNoteComponent,
    },]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
