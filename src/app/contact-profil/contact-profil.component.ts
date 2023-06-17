import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadPhotoDialogComponent } from '../upload-photo-dialog/upload-photo-dialog.component';
import { EditProfilDialogComponent } from '../edit-profil-dialog/edit-profil-dialog.component';
import { SetStatusDialogComponent } from '../set-status-dialog/set-status-dialog.component';
import { EditContactInformationDialogComponent } from '../edit-contact-information-dialog/edit-contact-information-dialog.component';

@Component({
  selector: 'app-contact-profil',
  templateUrl: './contact-profil.component.html',
  styleUrls: ['./contact-profil.component.scss']
})
export class ContactProfilComponent {
  profileContactOnline = false

  constructor(public dialog: MatDialog) { }

  message() {
    console.log("message")
  }// vorübergehend

}
