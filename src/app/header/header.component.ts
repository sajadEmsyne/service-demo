import { Component } from '@angular/core';
import { PurchaseButtonComponent } from '../shared/components/purchase-button/purchase-button.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PurchaseButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    // private appService: AppService
    // this.appService.purchaseNow()
  ) {}
  purchaseNow() {
    // ...Some logics
    alert('Thank you for the purchase');
  }
}
