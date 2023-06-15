import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  link;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event['url']) {
        this.link = event['url'];
      }
    });
  }
}
