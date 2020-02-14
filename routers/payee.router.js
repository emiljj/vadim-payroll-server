const { Router } = require('express');

const payeeRouter = Router();

// GET // http://localhost:3001/payee

payeeRouter.get('/', (req, res) => {
  res.send('Hello Vasya!!!');
});

module.exports = payeeRouter;