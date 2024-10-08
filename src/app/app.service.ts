import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  subscribeNow() {
    // ...Some logics
    alert('Thank you for the subscription,Subscription from service');
  }

  fetchTopicList() {
    return this.http.get(
      'https://raw.githubusercontent.com/sajadEmsyne/service-demo/master/src/assets/json/topiclist.json'
    );
  }
}
