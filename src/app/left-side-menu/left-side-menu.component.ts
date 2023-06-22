import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateChannelDialogComponent } from '../create-channel-dialog/create-channel-dialog.component';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  firestore: Firestore = inject(Firestore);
  channels$: Observable<any>;
  channels: Array<any>;
  channelOpen = true;
  currentChannel;
  link;

  constructor(private router: Router, public dialog: MatDialog, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event['url']) {
        this.link = event['url'];
        console.log(event)
      }
    });
    this.route.paramMap.subscribe(paramMap => {
      this.currentChannel = paramMap.get('id');
      console.log(paramMap.get('id'))
    });
    const itemCollection = collection(this.firestore, 'channel');
    this.channels$ = collectionData(itemCollection, { idField: 'id' })
    this.channels$.subscribe((newChannels) => {
      this.channels = newChannels;
      console.log(this.channels)
    })
  }

  openDialog() {
    this.dialog.open(CreateChannelDialogComponent)
  }

  // changeCurrentChannel(id) {
  //   this.currentChannel = id;
  // }

}
