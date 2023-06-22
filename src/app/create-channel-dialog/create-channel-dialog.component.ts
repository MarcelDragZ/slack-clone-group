import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { addDoc, collection } from 'firebase/firestore';
import { Channel } from 'src/models/newChannel.class';

@Component({
  selector: 'app-create-channel-dialog',
  templateUrl: './create-channel-dialog.component.html',
  styleUrls: ['./create-channel-dialog.component.scss']
})
export class CreateChannelDialogComponent {
  channelName: string;
  firestore: Firestore = inject(Firestore);
  channel = new Channel()
  db;

  constructor(public dialogRef: MatDialogRef<CreateChannelDialogComponent>){
    this.db = collection(this.firestore, 'channel')
  }


  createChannel() {
    this.channel.channelName = this.channelName;
    addDoc(this.db, this.channel.toJSON()).then((result: any) => {
      console.log('finished', result);
      this.dialogRef.close()

    })


  }
}
