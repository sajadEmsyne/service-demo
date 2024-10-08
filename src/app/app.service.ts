import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  subscribeNow() {
    // ...Some logics
    alert('Thank you for the subscription,Subscription from service');
  }
}
