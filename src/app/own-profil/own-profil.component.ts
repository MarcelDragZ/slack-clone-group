import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadPhotoDialogComponent } from '../upload-photo-dialog/upload-photo-dialog.component';
import { EditProfilDialogComponent } from '../edit-profil-dialog/edit-profil-dialog.component';
import { SetStatusDialogComponent } from '../set-status-dialog/set-status-dialog.component';
import { EditContactInformationDialogComponent } from '../edit-contact-information-dialog/edit-contact-information-dialog.component';

@Component({
  selector: 'app-own-profil',
  templateUrl: './own-profil.component.html',
  styleUrls: ['./own-profil.component.scss']
})
export class OwnProfilComponent {
  profileContactOnline = false
  ownProfile = true

  constructor(public dialog: MatDialog) { }

  uploadPhoto() {
    this.dialog.open(UploadPhotoDialogComponent);
  }

  editProfile() {
    this.dialog.open(EditProfilDialogComponent);
  }

  editContactInfo() {
    this.dialog.open(EditContactInformationDialogComponent);
  }

  setStatus() {
    this.dialog.open(SetStatusDialogComponent);
  }
  toggleOwnUser() {}
}
