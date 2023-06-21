import { Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  currentUser: any;
}

@Component({
  selector: 'app-edit-profil-dialog',
  templateUrl: './edit-profil-dialog.component.html',
  styleUrls: ['./edit-profil-dialog.component.scss']
})
export class EditProfilDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  uploadPhoto() {
  }
}
