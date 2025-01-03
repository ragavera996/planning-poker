const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const roomsRouter = require('./routes/rooms');
const handleSocket = require('./socket/handlers');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());
app.use('/api/rooms', roomsRouter);

app.use('/test', (req, res)=> {
  res.send("Server is running")
})

app.use('/', (req, res)=> {
  res.send("Server is running on port 3000")
})

handleSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});