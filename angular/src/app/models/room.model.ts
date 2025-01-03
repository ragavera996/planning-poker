export interface RoomState {
  id: string;
  name: string;
  participants: Participant[];
  votes: Vote[];
  revealed: boolean;
}

export interface Participant {
  id: string;
  name: string;
}

export interface Vote {
  id: string;
  vote: string | number;
}