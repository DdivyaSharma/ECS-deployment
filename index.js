const express = require('express');
const app = express();
const port = 3031;

app.get('/', (req, res) => {
  res.send('Hello from Fargate!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

