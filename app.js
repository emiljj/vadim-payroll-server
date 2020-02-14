const express = require('express');

const payeeRouter = require('./routers/payee.router');

const PORT = 3001;

const app = express();

app.use('/payee', payeeRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})