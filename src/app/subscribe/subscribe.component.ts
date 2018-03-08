import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {

  model = new Subscription();
  @ViewChild('subscribeForm') subscribeForm: any;

  constructor() {
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      // this.subscriptionService.subscribeToMailchimpList(this.model).subscribe(
      //   data => {
          this.subscribeForm.resetForm();
        // },
        // error => {
        //   alert('an error occurred!');
        // }
      // );
    }
  }

}

class Subscription {
  constructor(public firstName: string = '',
              public lastName: string = '',
              public email: string = '') {
  }
}
