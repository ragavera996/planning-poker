import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { joinRoomDialogStyles } from './join-room-dialog.styles';

@Component({
  selector: 'app-join-room-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="dialog-overlay">
      <div class="dialog">
        <h2>Join Planning Poker</h2>
        <div class="form-group">
          <label for="userName">Your Name</label>
          <input
            type="text"
            id="userName"
            [(ngModel)]="userName"
            placeholder="Enter your name"
            class="input"
          />
        </div>
        <button 
          (click)="onJoin()"
          [disabled]="!userName.trim()"
          class="btn">
          Join Room
        </button>
      </div>
    </div>
  `,
  styles: joinRoomDialogStyles
})
export class JoinRoomDialogComponent {
  @Output() join = new EventEmitter<string>();
  userName = '';

  onJoin() {
    if (this.userName.trim()) {
      this.join.emit(this.userName);
    }
  }

  onClose() {
    
  }
}