const { v4: uuidv4 } = require('uuid');
const Room = require('../models/Room');

class RoomService {
  constructor() {
    this.rooms = new Map();
  }

  createRoom(name) {
    const id = uuidv4();
    const room = new Room(id, name);
    this.rooms.set(id, room);
    return room;
  }

  getRoom(id) {
    return this.rooms.get(id);
  }

  deleteRoom(id) {
    this.rooms.delete(id);
  }
}

module.exports = new RoomService();