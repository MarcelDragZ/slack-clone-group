import { Component } from '@angular/core';
import { Firestore, collection, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { RegisteredUser } from 'src/models/registeredUser.class';
import { UploadPhotoDialogComponent } from '../upload-photo-dialog/upload-photo-dialog.component';
import { EditProfilDialogComponent } from '../edit-profil-dialog/edit-profil-dialog.component';
import { SetStatusDialogComponent } from '../set-status-dialog/set-status-dialog.component';
import { EditContactInformationDialogComponent } from '../edit-contact-information-dialog/edit-contact-information-dialog.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { HttpClient } from '@angular/common/http';


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
      text: 'Set yourself away',
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
      onlineStatus: false,
      userStatus: 'working remotely',
      timezone: 'Europe/Paris',
    }


  ownProfile = false
  users: any[] = [];
  renderUserData: any = this.currentUser
  currentTime: string = '';


  constructor(public dialog: MatDialog,
    public firestore: Firestore,
    private clipboard: Clipboard,
    private http: HttpClient
  ) {
    onSnapshot(collection(this.firestore, 'registeredUsers'), (snapshot) => {
      let user = snapshot.docs
        .map((doc) => {
          let data = doc.data();
          let id = doc.id;
          return { id, ...data };
        })
      this.users = user;
    });
  }


  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }


  getSetStatusText(): string {
    return this.currentUser.onlineStatus ? 'Set yourself away' : ' [AWAY]Set yourself Active';
  }


  fakeLogin(id) {
    let existingUser = this.users.find(profil => profil.id === id);
    this.currentUser = existingUser
    this.ownProfile = false
    if (this.currentUser.onlineStatus === false) {
      return
    } else {
      this.currentUser.onlineStatus = true
      this.saveDataToFirestore(true)
    }
  }


  onTimezoneChange(event: any) {
    const timezone = event;
    const url = `http://worldtimeapi.org/api/timezone/${timezone ? timezone : 'Europe/Paris'}`;
    this.http.get(url).subscribe((response: any) => {
      const datetime = response.datetime;
      const [date, time] = datetime.split('T');
      const [rawTime] = time.split('.');
      const formattedDatetime = `${date} ${rawTime}`;
      const currentTime = new Date(formattedDatetime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      this.currentTime = currentTime;
    });
  }


  getUserProfil(id) {
    let existingUser = this.users.find(profil => profil.id === id);
    if (existingUser) {
      this.renderUserData = existingUser
      this.onTimezoneChange(this.renderUserData.timezone)
      if (existingUser.id === this.currentUser.id) {
        this.ownProfile = true
      } else {
        this.ownProfile = false
      }
    }
  }


  matMenuRedirection(toTheFunction) {
    switch (toTheFunction) {
      case 'copyDisplayName':
        this.copyText(this.renderUserData.displayName)
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
        this.toggleOnlineStatus();
        break;
      case 'copyMemberID':
        this.copyText(this.renderUserData.id)
        break;
      default:
        throw 'Invalid action:' + toTheFunction;
    }
  }


  toggleOnlineStatus() {
    let status = this.currentUser.onlineStatus
    if (status === false) {
      this.currentUser.onlineStatus = true
      this.saveDataToFirestore(status)
    }
    else if (status === true) {
      this.currentUser.onlineStatus = false
      this.saveDataToFirestore(status)
    }
  }


  saveDataToFirestore(status) {
    const userRef = doc(this.firestore, 'registeredUsers', this.currentUser.id);
    updateDoc(userRef, { onlineStatus: status });
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


  message() {
    console.log("message")
  }


}
