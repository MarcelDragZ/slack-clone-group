import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack-clone-group';
  link;
 

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event['url']) {
        this.link = event['url'];
      }
    });
  }


  /* import { Firestore, collection, onSnapshot, addDoc, setDoc, doc } from '@angular/fire/firestore'; // Imports

  constructor(private firestore: Firestore) {} // Constructor import

  onSnapshot(collection(this.firestore, 'users'), (snapshot) => { //retrieve data
        let user = snapshot.docs
          .map((doc) => {
            let data = doc.data();
            let id = doc.id;
            return { id, ...data };
          })
          .find((user) => user.id === this.userID); // if you want find custom user

        if (user) {
          this.user = new User(user);
        }
      });



   try {
        let usersCollectionRef = collection(this.firestore, 'users');  // set data in database
        let userDocRef = doc(usersCollectionRef, this.userID);

        await setDoc(userDocRef, this.user.toJSON());

        this.loadingProgress = false;
      } catch (e) {
        console.error('Error updating document: ', e);
      }
   */

}
