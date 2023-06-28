import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { FormControl, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export interface DialogData {
  currentUser: any;
}

@Component({
  selector: 'app-edit-profil-dialog',
  templateUrl: './edit-profil-dialog.component.html',
  styleUrls: ['./edit-profil-dialog.component.scss']
})


export class EditProfilDialogComponent {
  form = new FormGroup({
    fullName: new FormControl('', [this.lettersOnlyValidator(), Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    displayName: new FormControl('', [this.lettersOnlyValidator(), Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    title: new FormControl('', [Validators.maxLength(50)]),
    timezone: new FormControl('', [Validators.required]),
  });

  // @ViewChild('form') form!: ElementRef | undefined;
  // @ViewChild('fullName') fullName!: ElementRef;
  // @ViewChild('displayName') nameField!: ElementRef;
  // @ViewChild('title') messageField!: ElementRef;
  // @ViewChild('location') sendButton!: ElementRef;

  timezones = [
    'Etc/GMT+12',
    'Europe/London',
    'Europe/Paris',
    'Europe/Istanbul',
    'Europe/Moscow',
    'America/Anchorage',
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
    'America/Argentina/Buenos_Aires',
    'America/Noronha',
    'Africa/Lagos',
    'Africa/Cairo',
    'Asia/Dubai',
    'Asia/Kabul',
    'Asia/Tehran',
    'Asia/Yerevan',
    'Asia/Kolkata',
    'Asia/Colombo',
    'Asia/Kathmandu',
    'Asia/Almaty',
    'Asia/Dhaka',
    'Asia/Bangkok',
    'Asia/Hong_Kong',
    'Asia/Kuala_Lumpur',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Atlantic/Azores',
    'Pacific/Midway',
    'Pacific/Honolulu',
    'Pacific/Guam',
    'Pacific/Fiji',
    'Pacific/Auckland',
    'Pacific/Tongatapu',
    'Pacific/Apia',
    'Pacific/Kiritimati'
  ];
  

  selectedTimezone: string = '';
  currentTime: string = '';
  editUser: any;
  proof: boolean;

  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<EditProfilDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }


  lettersOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /[^a-zA-Z ]/.test(control.value);
      return forbidden ? { 'lettersOnly': { value: control.value } } : null;
    };
  }

  ngOnInit() {
    this.editUser = { ...this.data.currentUser };
    this.form.patchValue(this.editUser);
  }


  uploadPhoto() {
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
