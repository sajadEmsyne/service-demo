import { Component, Input } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { cardInfo } from '../shared/interfaces/cardInfo';
import { PurchaseButtonComponent } from '../shared/components/purchase-button/purchase-button.component';

@Component({
  selector: 'app-topic-info',
  standalone: true,
  imports: [CardComponent, PurchaseButtonComponent],
  templateUrl: './topic-info.component.html',
  styleUrl: './topic-info.component.css',
})
export class TopicInfoComponent {
  @Input() cardDetails!: cardInfo;

  purchaseNow() {
    // ...Some logics
    alert('Thank you for the purchase');
  }
}
