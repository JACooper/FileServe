const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Serve everything in the hosted folder
app.use(express.static(path.join(`${__dirname}/../hosted/`)));

app.get('/', (request, response) => {
  response.sendFile('index.html', {root: path.resolve(`${__dirname}/../hosted/`)});
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Listening on port ${port}`);
});