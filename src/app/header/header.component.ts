import { Component } from '@angular/core';
import { SubscribeButtonComponent } from '../shared/components/subscribe-button/subscribe-button.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SubscribeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    // private appService: AppService
    // this.appService.subscribeNow()
  ) {}
  subscribeNow() {
    // ...Some logics
    alert('Thank you for the subscription');
  }
}
