import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';
import { RoomState } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket: Socket;
  private roomState = new BehaviorSubject<RoomState | null>(null);

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('room-state', (state: RoomState) => {
      this.roomState.next(state);
    });
  }

  joinRoom(roomId: string, userName: string) {
    this.socket.emit('join-room', { roomId, userName });
  }

  vote(value: string | number) {
    this.socket.emit('vote', { vote: value });
  }

  reveal() {
    this.socket.emit('reveal');
  }

  reset() {
    this.socket.emit('reset');
  }

  getRoomState() {
    return this.roomState.asObservable();
  }
}