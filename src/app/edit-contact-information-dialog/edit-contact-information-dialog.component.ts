import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, onSnapshot, addDoc, setDoc, doc, updateDoc } from '@angular/fire/firestore';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export interface DialogData {
  currentUser: any;
}

@Component({
  selector: 'app-edit-contact-information-dialog',
  templateUrl: './edit-contact-information-dialog.component.html',
  styleUrls: ['./edit-contact-information-dialog.component.scss']
})

export class EditContactInformationDialogComponent implements OnInit {
  form = new FormGroup({
    phone: new FormControl('', [this.onlyDigits(), Validators.minLength(5), Validators.maxLength(15)]),
  });

  editUser: any;

  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<EditContactInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  
  onlyDigits(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let nonNumericCharacters = /\D/g
      if (control.value && nonNumericCharacters.test(control.value)) {
        return { 'nonNumeric': true };
      }
      return null;
    };
  }

  ngOnInit() {
    this.editUser = { ...this.data.currentUser };
    this.form.patchValue(this.editUser);
  }

  ngSubmit() {
    this.saveChanges()
    this.dialogRef.close();
  }

  saveChanges() {
    Object.assign(this.editUser, this.form.value);
    const userRef = doc(this.firestore, 'registeredUsers', this.editUser.id);
    updateDoc(userRef, this.editUser)
      .then(() => {
        Object.assign(this.data.currentUser, this.editUser);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  }

  validateInput(control: AbstractControl) {
    control.markAsTouched();
  }
}
