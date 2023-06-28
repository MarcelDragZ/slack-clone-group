import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-status-dialog',
  templateUrl: './set-status-dialog.component.html',
  styleUrls: ['./set-status-dialog.component.scss'],
})
export class SetStatusDialogComponent {
  form = new FormGroup({
    userStatus: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  });

  userStatus = [
    {
      text: 'In a meeting',
      function: 'inMeeting',
      removeTimer: '1 hour',
      icon: ''
    },

    {
      text: 'Commuting',
      function: 'commuting',
      removeTimer: '30 minutes',
      icon: ''
    },
    {
      text: 'Out sick',
      function: 'outSick',
      removeTimer: 'Today',
      icon: ''
    },
    {
      text: 'Vacationing',
      function: 'vacationing',
      removeTimer: 'Dont clear',
      icon: ''
    },
    {
      text: 'Working remotely',
      statusstatusstatus: 'workingRemotely',
      removeTimer: 'Today',
      icon: ''
    },
  ]

  selectedStatus: string = '';
  value = this.selectedStatus;


  constructor() { }
  setUserStatus(status) {
    console.log(this.value);
    
    this.selectedStatus = status;
    switch (status.function) {
      case 'inMeeting':
        console.log('inMeeting');
        console.log(status.text);
        this.userStatus = status.text
        this.value = status.text
        break;
      case 'commuting':
        console.log('commuting');
        break;
      case 'outSick':
        console.log('outSick');
        break;
      case 'vacationing':
        console.log('vacationing');
        break;
      case 'workingRemotely':
        console.log('workingRemotely');
        break;
    }
  }

  validateInput(control: AbstractControl) {
    control.markAsTouched();
  }

  saveChanges() {
    // Logik zum Speichern der Änderungen
  }
}
