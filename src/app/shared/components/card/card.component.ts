import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cardInfo } from '../../interfaces/cardInfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cardInfo!: cardInfo;
  @Input() mappingId?: any;
  @Output() selectedId = new EventEmitter<any>();

  emitSelectedCardDetails() {
    this.selectedId.emit(this.mappingId);
  }
}
