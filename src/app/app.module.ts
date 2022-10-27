import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { ForgetemailComponent } from './Components/forgetemail/forgetemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { ArchiveNoteComponent } from './Components/archive-note/archive-note.component';
import { TrashNoteComponent } from './Components/trash-note/trash-note.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule} from '@angular/material/menu';
import { FiltersPipe } from './Pipes/filters.pipe';
import { LabelNoteComponent } from './Components/label-note/label-note.component';
import { UpdateLabelComponent } from './Components/update-label/update-label.component';
import { AuthguardService } from './Services/authguardService/authguard.service';
import { CollaboratorComponent } from './Components/collaborator/collaborator.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetpasswordComponent,
    ForgetemailComponent,
    DashboardComponent,
    CreateNotesComponent,
    GetAllNotesComponent,
    DisplayNotesComponent,
    IconsComponent,
    UpdateNoteComponent,
    ArchiveNoteComponent,
    TrashNoteComponent,
    FiltersPipe,
    LabelNoteComponent,
    UpdateLabelComponent,
    CollaboratorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatAutocompleteModule
    
    
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
