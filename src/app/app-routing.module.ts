import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgetPaswordComponent } from './component/forget-passwored/forget-passwored.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { DisplaynoteComponent } from './component/displaynote/displaynote.component'; 
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
// import {AuthenticationGuard} from './authentication.guard';  


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget', component: ForgetPaswordComponent },
   { path: 'update', component: UpdatenoteComponent},
  //  {path:'home',component:DashboardComponent,canActivate:[AuthenticationGuard]},  
  { path: 'dashboard', component: DashboardComponent,
  
  children: [
    {
      path: '',
      redirectTo: 'notes',
      pathMatch: 'full',
    },
    {
      path: "notes",
      component: GetAllNotesComponent,
    },
    {
      path: "trash",
      component: TrashComponent,
    },
    {
      path: "archive",
      component: ArchiveComponent,
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
