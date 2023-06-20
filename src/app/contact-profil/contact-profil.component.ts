import { Component } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { RegisteredUser } from 'src/models/registeredUser.class';

@Component({
  selector: 'app-contact-profil',
  templateUrl: './contact-profil.component.html',
  styleUrls: ['./contact-profil.component.scss']
})
export class ContactProfilComponent {
  profileContactOnline = false
  users: any = new RegisteredUser();

  constructor(public dialog: MatDialog, private firestore: Firestore) {

    onSnapshot(collection(this.firestore, 'registeredUsers'), (snapshot) => {
      let user = snapshot.docs
        .map((doc) => {
          let data = doc.data();
          let id = doc.id;
          return { id, ...data };
        })
      this.users = user;
      console.log('user data:', this.users);
    });
  }


  message() {// vorübergehend
    console.log("message")
  }

}
