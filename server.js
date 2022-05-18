const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/src')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});