import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
} from '@angular/fire/firestore';
import { RegisteredUser } from 'src/models/registeredUser.class';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: any = new RegisteredUser();
  userID;
  saltRounds = 10;
  registerUserProgress = false;

  constructor(private firestore: Firestore) {}

  async setNewUser() {
    this.registerUserProgress = true;
    try {
      let hashedPassword = await bcrypt.hash(this.user.password, this.saltRounds);
      this.user.password = hashedPassword;
      await this.setUserToFirebase();
      this.registerUserProgress = false;
      this.user.email = '';
      this.user.password = '';
    } catch (error) {
      console.error('Error hashing password: ', error);
      this.registerUserProgress = false;
    }
  }

  async setUserToFirebase() {
    try {
      let usersCollectionRef = collection(this.firestore, 'registeredUsers');
      let userDocRef = doc(usersCollectionRef);
      await setDoc(userDocRef, this.user.toJSON());
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  }
}
