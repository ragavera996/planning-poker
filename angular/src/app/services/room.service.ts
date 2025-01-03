import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomState } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {
  //private apiUrl = 'https://agile-poker-backend.vercel.app/api/rooms';
  private apiUrl = 'http://localhost:3000/api/rooms';

  constructor(private http: HttpClient) {}

  createRoom(name: string) {
    return this.http.post<RoomState>(this.apiUrl, { name });
  }

  getRoom(id: string) {
    return this.http.get<RoomState>(`${this.apiUrl}/${id}`);
  }
}