import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { doc, setDoc, updateDoc } from "@angular/fire/firestore";
// import { AngularFirestore } from '@angular/fire/compat/firestore';

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
    // private firestore: AngularFirestore,


    public dialogRef: MatDialogRef<EditProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {

  }

  uploadPhoto() {
  }

  async  setUser(id) {
    // const userRef = this.firestore.doc('registeredUsers/' + id);
    // return userRef.update({ phone: this.data.currentUser.phone });
}
}
