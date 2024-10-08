import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicInfoComponent } from './topic-info/topic-info.component';
import { cardInfo } from './shared/interfaces/cardInfo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TopicListComponent,
    TopicInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service-demo';

  cardInfo!: cardInfo;

  selectedCard(cardDetails: cardInfo) {
    let cardDetailsSelected = JSON.parse(JSON.stringify(cardDetails));
    cardDetailsSelected.card = false;
    cardDetailsSelected.img = '/assets/images/loader.jpg';
    this.cardInfo = cardDetailsSelected;
  }
}
