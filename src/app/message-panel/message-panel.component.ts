import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from '@angular/fire/storage';
import { Observable, from } from 'rxjs';
@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {
  imageUrl: Observable<string>;

  constructor() {}

  ngOnInit() {
    const filePath = 'gs://slack-clone-group.appspot.com/Avatarbackground.png'; // Der Pfad zu deinem Bild in Firebase Storage
    const storageRef = ref(getStorage(), filePath);
    this.imageUrl = from(getDownloadURL(storageRef));
    console.log(this.imageUrl);

  }
}
