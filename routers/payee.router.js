const { Router } = require('express');
const Payee = require('../db/models/payee');

const payeeRouter = Router();

payeeRouter.get('/', async (req, res) => {
  const result = await Payee.find();
  res.send(result);
});

payeeRouter.post('/', async (req, res) => {
  console.log('Body =====>>>>> ', req.body);
  const result = await Payee.create(req.body);
  res.send(result);
});

payeeRouter.put('/', (req, res) => {
  res.send('update Vasya!!!');
});

payeeRouter.delete('/', (req, res) => {
  res.send('Vasya delete!!!');
});

module.exports = payeeRouter;