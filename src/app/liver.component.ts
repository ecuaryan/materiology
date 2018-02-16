import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'liver',
  templateUrl: './liver.component.html',
  styleUrls: ['./liver.component.scss']
})
export class LiverComponent {

  constructor(public snackBar: MatSnackBar) {}

  sendGaEvent() {
      (<any>window).gtag('event', 'button click', {
        'event_category': 'liver',
        'event_label': 'liver show interest',
        'value': '1'
      });
      this.snackBar.open('Thank you for letting us know!', 'close', {duration: 2000});
  }
}
