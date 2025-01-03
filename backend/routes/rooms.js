const express = require('express');
const router = express.Router();
const RoomService = require('../services/RoomService');

router.post('/', (req, res) => {
  const { name } = req.body;
  const room = RoomService.createRoom(name || 'Planning Poker');
  res.json(room.getState());
});

router.get('/:id', (req, res) => {
  const room = RoomService.getRoom(req.params.id);
  if (!room) {
    return res.status(404).json({ message: 'Room not found' });
  }
  res.json(room.getState());
});

module.exports = router;