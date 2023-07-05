import { Component, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import * as bcrypt from 'bcryptjs';
import { provideAuth, getAuth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithPopup } from '@firebase/auth';
import { Router } from '@angular/router';
import { LoggedOnUser } from 'src/models/loggedOnUser.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loggedOnUser: any = new LoggedOnUser();
  user;
  email;
  password;

  constructor(private firestore: Firestore, private router: Router) { }

  ngOnInit(): void {
    onSnapshot(collection(this.firestore, 'registeredUsers'), (snapshot) => {
      let user = snapshot.docs.map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      });
      this.user = user;
    });
  }

  logInUser() {
    let user = this.user.find((user) => user.email.toLowerCase() === this.email.toLowerCase());

    if (user) {
      bcrypt.compare(this.password, user.password, (err, result) => {
        if (result) {
          this.setLocalStorage(user);
          this.router.navigate(['/workspace']);
          console.log('Erfolgreich eingeloggt');
        } else {
          console.log('Falsches Passwort');
        }
      });
    } else {
      console.log('Benutzer nicht gefunden');
    }
  }

  async loginWithGoogle() {
    let auth = getAuth();
    let provider = new GoogleAuthProvider();
    try {
      let result = await signInWithPopup(auth, provider);
      let user = result.user;
      console.log(user);
      this.router.navigate(['/workspace']);
      console.log('Erfolgreich eingeloggt mit Google:', user);
    } catch (error) {
      console.error('Fehler bei der Google-Anmeldung:', error);
    }
  }

  logInGuest() {
    let user = this.user.find((user) => user.email.toLowerCase() === 'Guest@gmail.com'.toLowerCase());
    if (user) {
      bcrypt.compare('Guest', user.password, (err, result) => {
        if (result) {
          this.setLocalStorage(user);
          this.router.navigate(['/workspace']);
          console.log('Erfolgreich eingeloggt');
        } else {
          console.log('Falsches Passwort');
        }
      });
    } else {
      console.log('Benutzer nicht gefunden');
    }
  }

  async setLocalStorage(user) {
    this.loggedOnUser.id = user.id;
    this.loggedOnUser.timeStamp = new Date().getTime();
    localStorage.setItem('loggedOnUser', JSON.stringify(this.loggedOnUser));
  }
}
