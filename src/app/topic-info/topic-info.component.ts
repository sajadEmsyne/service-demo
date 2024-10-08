import { Component, Input } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { cardInfo } from '../shared/interfaces/cardInfo';
import { SubscribeButtonComponent } from '../shared/components/subscribe-button/subscribe-button.component';

@Component({
  selector: 'app-topic-info',
  standalone: true,
  imports: [CardComponent, SubscribeButtonComponent],
  templateUrl: './topic-info.component.html',
  styleUrl: './topic-info.component.css',
})
export class TopicInfoComponent {
  @Input() cardDetails!: cardInfo;

  subscribeNow() {
    // ...Some logics
    alert('Thank you for the subscription');
  }
}
