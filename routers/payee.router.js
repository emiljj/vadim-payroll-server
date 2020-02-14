const { Router } = require('express');

const payeeRouter = Router();

// GET // http://localhost:3001/payee

payeeRouter.get('/', (req, res) => {
  res.send('Hello Vasya!!!');
});

payeeRouter.post('/', (req, res) => {
  res.send('create Vasya!!!');
});

payeeRouter.put('/', (req, res) => {
  res.send('update Vasya!!!');
});

payeeRouter.delete('/', (req, res) => {
  res.send('Vasya delete!!!');
});

module.exports = payeeRouter;