import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card.model';
import { POKER_CARDS } from '../../data/poker-cards.data';
import { cardDeckStyles } from './card-deck.styles';

@Component({
  selector: 'app-card-deck',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-deck">
      <button
        *ngFor="let card of cards"
        class="card"
        [class.selected]="card.selected"
        (click)="selectCard(card)"
      >
        {{ card.value }}
      </button>
    </div>
  `,
  styles: cardDeckStyles
})
export class CardDeckComponent {
  cards: Card[] = POKER_CARDS;
  @Output() vote = new EventEmitter<string | number>();

  constructor() {
    this.reset();
  }

  selectCard(selectedCard: Card) {
    this.cards.forEach(card => card.selected = card === selectedCard);
    this.vote.emit(selectedCard.value);
  }

  reset() {
    this.cards.forEach(card => {
      card.selected = false
    });
  }
}