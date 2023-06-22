import { Component } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { RegisteredUser } from 'src/models/registeredUser.class';
import { UploadPhotoDialogComponent } from '../upload-photo-dialog/upload-photo-dialog.component';
import { EditProfilDialogComponent } from '../edit-profil-dialog/edit-profil-dialog.component';
import { SetStatusDialogComponent } from '../set-status-dialog/set-status-dialog.component';
import { EditContactInformationDialogComponent } from '../edit-contact-information-dialog/edit-contact-information-dialog.component';


@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss']
})
export class ContactProfileComponent {
  ownUserPointMenuItems = [
    {
      text: 'Copy display name:',
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

  public currentUser =
    {
      email: 'Max@mustermann.de',
      password: '123456',
      privateChannels: '',
      id: '1',
      fullName: 'Max Mustermann',
      displayName: 'Max Muster Mann',
      title: 'Developer',
      phone: '0173 1234567',
      profilePicture: 'unknow_user.png',
      organisations:
        [
          {
            name: 'Developer Community',
            visibility: true
          },
          {
            name: 'Developer Hub',
            visibility: false
          },
          {
            name: 'Developer Akademie',
            visibility: true
          }
        ],
      onlineStatus: true,
      userStatus: 'working remotely',
      location: 'Germany',
    }

  public ownProfile = false
  users: any[] = [];

  constructor(public dialog: MatDialog, public firestore: Firestore) {

    onSnapshot(collection(this.firestore, 'registeredUsers'), (snapshot) => {
      let user = snapshot.docs
        .map((doc) => {
          let data = doc.data();
          let id = doc.id;
          return { id, ...data };
        })
      this.users = user;
      console.log('user data:', this.users);
      console.log('user data:', this.currentUser.id);
    });
  }
  

  fakeLogin(id) {
    let existingUser = this.users.find(profil => profil.id === id);
    console.log(existingUser);
    this.currentUser = existingUser
    console.log('currentUser is :', this.currentUser);
    this.ownProfile = false
  }


  getUserProfil(id) {
    let existingUser = this.users.find(profil => profil.id === id);
    if (existingUser.id === this.currentUser.id) {
      this.ownProfile = true
    } else {
      this.ownProfile = false
    }
  }

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
    this.dialog.open(EditProfilDialogComponent, {
      data: { currentUser: this.currentUser }
    });
  }

  editContactInfo() {
    this.dialog.open(EditContactInformationDialogComponent,
      {
        data: { currentUser: this.currentUser }
      });
  }

  setStatus() {
    this.dialog.open(SetStatusDialogComponent);
  }

  message() {// vorübergehend
    console.log("message")
  }

}
