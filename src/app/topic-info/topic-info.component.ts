import { Component, inject, Input } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { cardInfo } from '../shared/interfaces/cardInfo';
import { PurchaseButtonComponent } from '../shared/components/purchase-button/purchase-button.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-topic-info',
  standalone: true,
  imports: [CardComponent, PurchaseButtonComponent],
  templateUrl: './topic-info.component.html',
  styleUrl: './topic-info.component.css',
})
export class TopicInfoComponent {
  service = inject(AppService);
  constructor() {}
  @Input() cardDetails!: cardInfo;

  purchaseNow() {
    // ...Some logics
    this.service.purchaseNow();
    // alert('Thank you for the purchase');
  }
}
