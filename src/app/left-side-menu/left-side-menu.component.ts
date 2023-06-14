import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  firestore: Firestore = inject(Firestore);
  channels$ : Observable<any>;
  channels: Array<any>;
  channelOpen = true;
  link;

  constructor( private router: Router){
    this.router.events.subscribe((event) => {
      if(event['url']){
        this.link = event['url'];
      }
  });
    const itemCollection = collection(this.firestore, 'channel');
    this.channels$ = collectionData(itemCollection, { idField: 'id' })
    this.channels$.subscribe((newChannels) => {
      this.channels = newChannels;
      console.log(this.channels)
    })
  }
  
}
