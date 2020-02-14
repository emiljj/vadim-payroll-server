const express = require('express');

const PORT = 3001;

const app = express();

app.post('/', function (req, res) {
  res.send('Got a POST request');
});



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})