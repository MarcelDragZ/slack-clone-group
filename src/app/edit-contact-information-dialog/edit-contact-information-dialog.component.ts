import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  currentUser: any;
}

@Component({
  selector: 'app-edit-contact-information-dialog',
  templateUrl: './edit-contact-information-dialog.component.html',
  styleUrls: ['./edit-contact-information-dialog.component.scss'],
})
export class EditContactInformationDialogComponent {
  constructor(
    public firestore: AngularFirestore,
    public dialogRef: MatDialogRef<EditContactInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  saveChanges() {
    this.firestore
      .collection('registeredUsers')
      .doc(this.data.currentUser.id) // Use the id of the currentUser
      .update(this.data.currentUser) // We do not need to call .toJSON() here
      .then(() => {
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }
}
