const express = require('express');
const cors = require('cors');
const { ExpressPeerServer } = require('peer');

const app = express();

app.get('/', (req, res) => res.send('Hello, gamer!'));

const server = app.listen(9000, () => console.log('Listening on Port 9000'));

const peerServer = ExpressPeerServer(server, {
  path: '',
});

app.use('/peerjs', peerServer);
