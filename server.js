const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.set('port', process.env.PORT || 8000);
app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

const server = http.createServer(app);
server.listen(app.get('port'), () => console.log('Server is running...'));