import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateChannelDialogComponent } from '../create-channel-dialog/create-channel-dialog.component';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss'],
})
export class LeftSideMenuComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  channels$: Observable<any>;
  channels: Array<any>;
  channelOpen = true;
  currentChannel;
  link;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentUrl = event.urlAfterRedirects;
        let channel = currentUrl.split('/channel/')[1];
        console.log('Channel:', channel);
        this.currentChannel = channel;
      }
    });
    let itemCollection = collection(this.firestore, 'channel');
    this.channels$ = collectionData(itemCollection, { idField: 'id' });
    this.channels$.subscribe((newChannels) => {
      this.channels = newChannels;
      console.log(this.channels);
    });
  }

  openDialog() {
    this.dialog.open(CreateChannelDialogComponent);
  }

  // changeCurrentChannel(id) {
  //   this.currentChannel = id;
  // }
}
