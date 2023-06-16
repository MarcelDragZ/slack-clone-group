import { Component, OnInit } from '@angular/core';
import { Firestore, collection, onSnapshot, addDoc, setDoc, doc } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user;

constructor(private firestore: Firestore) {}

ngOnInit(): void {
  onSnapshot(collection(this.firestore, 'registeredUsers'), (snapshot) => { //retrieve data
    let user = snapshot.docs
      .map((doc) => {
        let data = doc.data();
        let id = doc.id;
        return { id, ...data };
      })
      this.user = user;
  });
}

logInUser() {
  console.log(this.user);

 }

}
