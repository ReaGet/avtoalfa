const express = require('express');
const path = require('path');

const staticDirectory = path.resolve(__dirname, 'src', 'static');

const app = express();

app.use('/static', express.static(staticDirectory));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});