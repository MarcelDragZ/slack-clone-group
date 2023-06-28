import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, GoogleAuthProvider } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { LeftSideMenuComponent } from './left-side-menu/left-side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ChannelComponent } from './channel/channel.component';
import { RegisterComponent } from './register/register.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { MatButtonModule } from '@angular/material/button';
import { UploadPhotoDialogComponent } from './upload-photo-dialog/upload-photo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditProfilDialogComponent } from './edit-profil-dialog/edit-profil-dialog.component';
import { SetStatusDialogComponent } from './set-status-dialog/set-status-dialog.component';
import { EditContactInformationDialogComponent } from './edit-contact-information-dialog/edit-contact-information-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateChannelDialogComponent } from './create-channel-dialog/create-channel-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    LeftSideMenuComponent,
    ChannelComponent,
    RegisterComponent,
    ContactProfileComponent,
    UploadPhotoDialogComponent,
    EditProfilDialogComponent,
    SetStatusDialogComponent,
    EditContactInformationDialogComponent,
    CreateChannelDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
