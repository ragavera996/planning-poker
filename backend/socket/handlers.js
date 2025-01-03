const RoomService = require('../services/RoomService');

function handleSocket(io) {
  io.on('connection', (socket) => {
    let currentRoom = null;

    socket.on('join-room', ({ roomId, userName }) => {
      console.log('roomId-->' + roomId);
      console.log('Name-->' + userName);
      const room = RoomService.getRoom(roomId);
      if (!room) {
        console.log('Room not found')
        socket.emit('error', { message: 'Room not found' });
        return;
      }

      currentRoom = room;
      socket.join(roomId);
      room.addParticipant(socket.id, userName);
      io.to(roomId).emit('room-state', room.getState());
    });

    socket.on('vote', ({ vote }) => {
      if (!currentRoom) return;
      
      currentRoom.addVote(socket.id, vote);
      io.to(currentRoom.id).emit('room-state', currentRoom.getState());
    });

    socket.on('reveal', () => {
      if (!currentRoom) return;
      
      currentRoom.revealed = true;
      io.to(currentRoom.id).emit('room-state', currentRoom.getState());
    });

    socket.on('reset', () => {
      if (!currentRoom) return;
      
      currentRoom.clearVotes();
      io.to(currentRoom.id).emit('room-state', currentRoom.getState());
    });

    socket.on('disconnect', () => {
      if (currentRoom) {
        currentRoom.removeParticipant(socket.id);
        io.to(currentRoom.id).emit('room-state', currentRoom.getState());
      }
    });
  });
}

module.exports = handleSocket;