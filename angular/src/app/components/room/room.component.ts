import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services/socket.service';
import { CardDeckComponent } from '../card-deck/card-deck.component';
import { VotingResultsComponent } from '../voting-results/voting-results.component';
import { JoinRoomDialogComponent } from '../join-room-dialog/join-room-dialog.component';
import { roomStyles } from './room.styles';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule, CardDeckComponent, VotingResultsComponent, JoinRoomDialogComponent],
  template: `
    <div class="room-container">
      <header>
        <h1>{{ roomName }} - Planning Poker</h1>
        <div class="actions">
          <button (click)="onReveal()" class="btn">Reveal Votes</button>
          <button (click)="onReset()" class="btn">Reset</button>
        </div>
      </header>
      <h3>Hi {{ currentUser }},</h3>
      <main>
        <app-card-deck (vote)="onVote($event)"></app-card-deck>
        <app-voting-results 
          [votes]="votes">
        </app-voting-results>
      </main>
    </div>

    <app-join-room-dialog
      *ngIf="!hasJoined"
      (join)="onJoinRoom($event)">
    </app-join-room-dialog>
  `,
  styles: roomStyles
})
export class RoomComponent implements OnInit {
  roomName = 'Planning Poker';
  votes: (string | number)[] = [];
  revealed = false;
  participants: string[] = [];
  hasJoined = false;
  currentUser!: string | '';

  @ViewChildren(CardDeckComponent)
  deck: QueryList<CardDeckComponent> | undefined

  constructor(
    private socketService: SocketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.socketService.getRoomState().subscribe(state => {
      if (state) {
        this.roomName = state.name;
        this.revealed = state.revealed;
        this.participants = state.participants.map(p => p.name);
        this.votes = state.votes.map(v => v.vote);
      }
    });
  }

  onJoinRoom(userName: string) {
    let roomId = this.route.snapshot.params['id'];
    this.socketService.joinRoom(roomId, userName);
    this.hasJoined = true;
    this.currentUser = userName;
  }

  onVote(value: string | number) {
    this.socketService.vote(value);
  }

  onReveal() {
    this.socketService.reveal();
  }

  onReset() {
    this.socketService.reset();
    this.deck?.forEach(c => c.reset())
  }
}