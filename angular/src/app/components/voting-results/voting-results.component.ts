import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { calculateAverage } from '../../utils/vote.utils';
import { votingResultsStyles } from './voting-results.styles';

@Component({
  selector: 'app-voting-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="results">
      <h2>Voting Results</h2>
      <div class="stats">
        <div class="stat">
          <span class="label">Average:</span>
          <span class="value">{{ average }}</span>
        </div>
        <div class="stat">
          <span class="label">Participants:</span>
          <span class="value">{{ participants }}</span>
        </div>
      </div>
      <div class="votes">
        <div *ngFor="let vote of votes" class="vote-card">
          {{ vote }}
        </div>
      </div>
    </div>
  `,
  styles: votingResultsStyles
})
export class VotingResultsComponent {
  @Input() votes: (string | number)[] = [];
  
  get participants(): number {
    return this.votes.length;
  }

  get average(): string {
    return calculateAverage(this.votes);
  }
}