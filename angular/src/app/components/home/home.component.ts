import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../services/room.service';
import { homeStyles } from './home.styles';
import { JoinRoomDialogComponent } from '../join-room-dialog/join-room-dialog.component';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="create-room">
      <h1>Planning Poker</h1>
      <div class="form">
        <input
          type="text"
          [(ngModel)]="roomName"
          placeholder="Enter room name"
          class="input"
        />
        <button (click)="createRoom()" class="btn">Create Room</button>
      </div>
    </div>
  `,
  styles: homeStyles
})
export class HomeComponent {
  roomName = '';
  hasJoined = true;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute,
    private socketService: SocketService,
  ) {}

  createRoom() {
    const name = this.roomName.trim() || 'Planning Poker';
    this.roomService.createRoom(name).subscribe(room => {
      this.router.navigate(['/room', room.id]);
    });
  }
}