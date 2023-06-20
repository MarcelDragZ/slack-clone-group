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
  ownUserPointMenuItems = [
    {
      text: 'Copy display name: @John Doe ',
      function: 'copyDisplayName',
    },

    {
      text: 'View preferences',
      function: 'viewPreferences',
    },
    {
      text: 'Account settings',
      function: 'accountSettings'
    },
    {
      text: 'View your files',
      function: 'viewYourFiles'
    },
    {
      text: 'Set yourseld away',
      function: 'setAway'
    },
    {
      text: 'Copy member ID',
      function: 'copyMemberID'
    }
  ]

  // vorübergehend bis die Funktionen implementiert sind
  viewAsOptions = [
    {
      organisation: 'Developer Community',
      visibility: true
    },
    {
      organisation: 'Developer Akademie',
      visibility: true
    },
    {
      organisation: 'Developer Hub',
      visibility: false
    },
  ]



  constructor(public dialog: MatDialog) { }

  matMenuRedirection(toTheFunction) {
    switch (toTheFunction) {
      case 'copyDisplayName':
        console.log('copyDisplayName');
        break;
      case 'viewPreferences':
        console.log('viewPreferences');
        break;
      case 'accountSettings':
        console.log('accountSettings');
        break;
      case 'viewYourFiles':
        console.log('viewYourFiles');
        break;
      case 'setAway':
        console.log('setAway');
        break;
      case 'copyMemberID':
        console.log('copyMemberID');
        break;
      default:
        throw 'Invalid action:' + toTheFunction;
    }
  }


  getVisibilityStatus(viewAs) {
    console.log('status is:', viewAs);
  }

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
  toggleOwnUser() { }
}
