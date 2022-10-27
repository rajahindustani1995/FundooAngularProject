import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { ArchiveNoteComponent } from './Components/archive-note/archive-note.component';
import { TrashNoteComponent } from './Components/trash-note/trash-note.component';
import { AuthGuard } from './Auth_Guard/auth.guard';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'forgetemail', component: ForgetemailComponent },
  {
    path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent,

    children: [
      { path: 'notes', component: GetAllNotesComponent },
      { path: 'trash', component: TrashNoteComponent },
      { path: 'archive', component: ArchiveNoteComponent },
    ]
  },
  { path: 'icons', component: IconsComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
