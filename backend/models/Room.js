class Room {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.participants = new Map();
    this.votes = new Map();
    this.revealed = false;
  }

  addParticipant(userId, name) {
    this.participants.set(userId, name);
  }

  removeParticipant(userId) {
    this.participants.delete(userId);
    this.votes.delete(userId);
  }

  addVote(userId, vote) {
    this.votes.set(userId, vote);
  }

  clearVotes() {
    this.votes.clear();
    this.revealed = false;
  }

  getState() {
    return {
      id: this.id,
      name: this.name,
      participants: Array.from(this.participants.entries()).map(([id, name]) => ({ id, name })),
      votes: this.revealed 
        ? Array.from(this.votes.entries()).map(([id, vote]) => ({ id, vote }))
        : Array.from(this.votes.keys()).map(id => ({ id, vote: '?' })),
      revealed: this.revealed
    };
  }
}

module.exports = Room;